import {
  IAMClient,
  CreateAccessKeyCommand,
  DeleteAccessKeyCommand,
} from '@aws-sdk/client-iam';
import {
  SSMClient,
  DeleteParameterCommand,
  PutParameterCommand,
} from '@aws-sdk/client-ssm';
import type {
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceDeleteEvent,
  CloudFormationCustomResourceEvent,
  CloudFormationCustomResourceResponse,
  CloudFormationCustomResourceUpdateEvent,
} from 'aws-lambda';

/** The IAMAccessKey created is stored JSON.stringified using this interface */
export interface IAMAccessKey {
  accessKeyId: string;
  secretAccessKey: string;
}

const getParameterName = (
  resourceProperties: CloudFormationCustomResourceCreateEvent['ResourceProperties'],
): string => {
  const parameterName = resourceProperties?.parameterName;
  if (!parameterName) {
    throw new Error('parameterName is not set');
  }
  return parameterName;
};

const getRegion = (
  resourceProperties: CloudFormationCustomResourceCreateEvent['ResourceProperties'],
): string => {
  const region = resourceProperties?.region ?? process.env.AWS_REGION;
  if (!region) {
    throw new Error('region or AWS_REGION is not set');
  }
  return region;
};

const getUserUserName = (
  resourceProperties: CloudFormationCustomResourceCreateEvent['ResourceProperties'],
): string => {
  const userName = resourceProperties?.userName;
  if (!userName) {
    throw new Error('userName is not set');
  }
  return userName;
};

export const onEvent = async (
  event: CloudFormationCustomResourceEvent,
): Promise<CloudFormationCustomResourceResponse> => {
  console.debug('Event Received:', JSON.stringify(event));

  try {
    switch (event.RequestType) {
      case 'Create':
        return await onCreate(
          event as CloudFormationCustomResourceCreateEvent,
        );
      case 'Update':
        return await onUpdate(
          event as CloudFormationCustomResourceUpdateEvent,
        );
      case 'Delete':
        return await onDelete(
          event as CloudFormationCustomResourceDeleteEvent,
        );
      default:
        throw new Error(`Unknown event type in event ${event}`);
    }
  } catch (err) {
    console.error(err);
    throw new Error('Failed');
  }
};

const onCreate = async (
  event: CloudFormationCustomResourceCreateEvent,
): Promise<CloudFormationCustomResourceResponse> => {
  const region = getRegion(event.ResourceProperties);
  const userName = getUserUserName(event.ResourceProperties);

  const iam = new IAMClient({ region });
  const accessKeyResponse = await iam.send(
    new CreateAccessKeyCommand({ UserName: userName }),
  );

  if (!accessKeyResponse?.AccessKey?.AccessKeyId) {
    throw new Error('AccessKey not created');
  }

  console.debug(
    'AccessKey created:',
    accessKeyResponse?.AccessKey?.AccessKeyId,
  );

  const parameterName = getParameterName(event.ResourceProperties);

  const ssm = new SSMClient({ region });

  await ssm.send(
    new PutParameterCommand({
      Name: parameterName,
      Type: 'SecureString',
      Value: JSON.stringify({
        accessKeyId: accessKeyResponse.AccessKey.AccessKeyId,
        secretAccessKey: accessKeyResponse?.AccessKey.SecretAccessKey,
      } as IAMAccessKey),
      Overwrite: true,
    }),
  );

  console.debug('Parameter created:', parameterName);

  return {
    Status: 'SUCCESS',
    RequestId: event.RequestId,
    StackId: event.StackId,
    LogicalResourceId: event.LogicalResourceId,
    PhysicalResourceId: accessKeyResponse.AccessKey.AccessKeyId,
  };
};

const onUpdate = async (
  event: CloudFormationCustomResourceUpdateEvent,
): Promise<CloudFormationCustomResourceResponse> => {
  return {
    Status: 'SUCCESS',
    RequestId: event.RequestId,
    StackId: event.StackId,
    LogicalResourceId: event.LogicalResourceId,
    PhysicalResourceId: event.PhysicalResourceId,
  };
};

const onDelete = async (
  event: CloudFormationCustomResourceDeleteEvent,
): Promise<CloudFormationCustomResourceResponse> => {
  const parameterName = getParameterName(event.ResourceProperties);
  const region = getRegion(event.ResourceProperties);
  const userName = getUserUserName(event.ResourceProperties);
  const accessKeyId = event.PhysicalResourceId;

  const ssm = new SSMClient({ region });

  await ssm.send(
    new DeleteParameterCommand({
      Name: parameterName,
    }),
  );

  console.debug('Parameter deleted:', parameterName);

  const iam = new IAMClient({ region });

  await iam.send(
    new DeleteAccessKeyCommand({
      UserName: userName,
      AccessKeyId: accessKeyId,
    }),
  );

  console.debug('AccessKey deleted:', { userName, accessKeyId });

  return {
    Status: 'SUCCESS',
    RequestId: event.RequestId,
    StackId: event.StackId,
    LogicalResourceId: event.LogicalResourceId,
    PhysicalResourceId: event.PhysicalResourceId,
  };
};


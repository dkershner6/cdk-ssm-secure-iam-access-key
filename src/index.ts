import * as fs from 'fs';
import * as path from 'path';

import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdanodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export { IAMAccessKey } from './provider';

export interface ISSMSecureIAMAccessKeyProps {
  readonly parameterName: string;
  readonly region?: string;
  readonly user: iam.IUser;
}

/**
 * Custom resource that creates a new IAM access key for the given user, then stores the AccessKeyId and Secret in a SSM SecureString Parameter.
 *
 * @param props SSMSecureIAMAccessKeyProps
 *
 * @returns (Not actually returned) The Value of the Parameter is the JSON representation of the AccessKeyId and Secret:
 * @see IAMAccessKey
 * Example: { "accessKeyId": "AKIAXXXXXXXXXXXXXXXX", "secretAccessKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" }
 *
 * Give permission to use this secret SSM Parameter:
 * ssm.StringParameter.fromSecureStringParameterAttributes(this, "ID", {
 *     parameterName: this.props.parameterName,
 * });
 */
export class SSMSecureIAMAccessKey extends Construct {
  private readonly provider: cr.Provider;

  constructor(
    scope: Construct,
    private readonly id: string,
    private readonly props: ISSMSecureIAMAccessKeyProps,
  ) {
    super(scope, id);

    this.validateProps();

    this.provider = this.createAccessKeyCreatorProvider();
    this.createResource();
  }

  private validateProps(): void {
    if (!this.props.parameterName) {
      throw new Error('parameterName is required');
    }
    if (!this.props.user?.userName) {
      throw new Error('user is required');
    }
  }

  private createAccessKeyCreatorProvider(): cr.Provider {
    const providerFileName = 'provider';
    const providerPathTs = path.join(__dirname, `${providerFileName}.ts`);
    const providerPathJs = path.join(__dirname, `${providerFileName}.js`);

    const onEventHandler = new lambdanodejs.NodejsFunction(
      this,
      `${this.id}-OnEventHandler`,
      {
        entry: fs.existsSync(providerPathTs) ? providerPathTs : providerPathJs,
        handler: 'onEvent',
        runtime: lambda.Runtime.NODEJS_18_X,
        timeout: cdk.Duration.minutes(5),
      },
    );

    onEventHandler.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: [this.props.user.userArn],
        actions: [
          'iam:CreateAccessKey',
          'iam:DeleteAccessKey',
        ],
      }),
    );

    onEventHandler.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: [
          `arn:aws:ssm:*:*:parameter${this.props.parameterName}`, // Parameter name starts with a slash
        ],
        actions: [
          'ssm:DeleteParameter',
          'ssm:DescribeParameters',
          'ssm:GetParameter',
          'ssm:GetParameterHistory',
          'ssm:PutParameter',
        ],
      }),
    );

    return new cr.Provider(this, `${this.id}-CreateAccessKeyProvider`, {
      onEventHandler,
    });
  }

  private createResource(): cdk.CustomResource {
    return new cdk.CustomResource(this, `${this.id}-Resource`, {
      serviceToken: this.provider.serviceToken,
      resourceType: 'Custom::SSMSecureIAMAccessKey',
      properties: {
        parameterName: this.props.parameterName,
        region: this.props.region,
        userName: this.props.user.userName,
      },
    });
  }
}

import { assertions, App, Stack } from 'aws-cdk-lib';
import { ISSMSecureIAMAccessKeyProps, SSMSecureIAMAccessKey } from '../src';

const mockApp = new App();
const stack = new Stack(mockApp, 'TestStack');

it('Should deploy', () => {
  const testProps: ISSMSecureIAMAccessKeyProps = {
    parameterName: '/test/param',
    // @ts-expect-error - Incomplete Mock
    user: {
      userName: 'testUserName',
      userArn: 'testUserArn',

    },
  };

  new SSMSecureIAMAccessKey(stack, 'test', testProps);

  expect(assertions.Template.fromStack(stack).toJSON()).toMatchSnapshot();
});
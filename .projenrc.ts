import { awscdk } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Derek Kershner',
  authorAddress: 'https://dkershner.com',
  cdkVersion: '2.103.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-ssm-secure-iam-access-key',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/dkershner6/cdk-ssm-secure-iam-access-key.git',

  // deps: [],                /* Runtime dependencies of this module. */
  description: 'Creates an IAM Access Key for a provided IAM User and stores the result in an SSM SecureString Parameter', /* The description is just a string that helps people understand the purpose of the package. */
  keywords: ['awscdk', 'iam', 'ssm', 'securestring'],
  devDeps: [
    '@types/aws-lambda',
    'esbuild',
  ],
  bundledDeps: [
    '@aws-sdk/client-iam',
    '@aws-sdk/client-ssm',
  ],
  packageName: 'cdk-ssm-secure-iam-access-key', /* The "name" in package.json. */
  gitignore: ['.DS_STORE'],

  tsconfig: {
    compilerOptions: {
      esModuleInterop: true,
    },
  },
});

project.synth();
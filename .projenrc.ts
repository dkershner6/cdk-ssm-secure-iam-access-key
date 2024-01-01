import { Node20AwsCdkConstructLibrary } from "dkershner6-projen-typescript";
import { Nvmrc } from "projen-nvm";

const GITHUB_USERNAME_OR_ORG = "dkershner6";
const GITHUB_USERNAME_OR_ORG_PASCAL_CASE = "DKershner6";
const PROJECT_NAME = "cdk-ssm-secure-iam-access-key";
const PROJECT_NAME_PASCAL_CASE = "CdkSsmSecureIamAccessKey";

const project = new Node20AwsCdkConstructLibrary({
    author: "Derek Kershner",
    authorAddress: "https://dkershner.com",
    cdkVersion: "2.103.1",
    defaultReleaseBranch: "main",
    jsiiVersion: "~5.0.0",
    name: PROJECT_NAME,
    projenrcTs: true,
    repositoryUrl:
        "https://github.com/dkershner6/cdk-ssm-secure-iam-access-key.git",

    // deps: [],
    description:
        "Creates an IAM Access Key for a provided IAM User and stores the result in an SSM SecureString Parameter" /* The description is just a string that helps people understand the purpose of the package. */,
    keywords: ["awscdk", "iam", "ssm", "securestring"],
    devDeps: [
        "@types/aws-lambda",
        "@types/clone-deep",
        "clone-deep",
        "esbuild",
        "dkershner6-projen-typescript",
        "projen-nvm",
    ],
    bundledDeps: ["@aws-sdk/client-iam", "@aws-sdk/client-ssm"],
    packageName: PROJECT_NAME,
    gitignore: [".DS_STORE"],

    // Publish to other languages
    publishToPypi: {
        distName: PROJECT_NAME,
        module: PROJECT_NAME.replace("-", "_"),
    },

    publishToNuget: {
        packageId: `${GITHUB_USERNAME_OR_ORG_PASCAL_CASE}.${PROJECT_NAME_PASCAL_CASE}`,
        dotNetNamespace: `${GITHUB_USERNAME_OR_ORG_PASCAL_CASE}.${PROJECT_NAME_PASCAL_CASE}`,
    },

    publishToGo: {
        moduleName: `github.com/${GITHUB_USERNAME_OR_ORG}/${PROJECT_NAME}`,
        gitBranch: "publish-go",
    },

    // publishToMaven: {
    //     mavenGroupId: `io.github.${GITHUB_USERNAME_OR_ORG}`,
    //     javaPackage: `io.github.${GITHUB_USERNAME_OR_ORG}.${PROJECT_NAME.replace(
    //         "-",
    //         "",
    //     )}`,
    //     mavenArtifactId: PROJECT_NAME,
    //     mavenEndpoint: "https://s01.oss.sonatype.org",
    // },
});
project.addPackageIgnore(".prettier*");
project.addPackageIgnore(".projenrc.*");

new Nvmrc(project);

project.synth();

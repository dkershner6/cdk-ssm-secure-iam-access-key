package cdkssmsecureiamaccesskey

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
)

type ISSMSecureIAMAccessKeyProps interface {
	ParameterName() *string
	Region() *string
	User() awsiam.IUser
}

// The jsii proxy for ISSMSecureIAMAccessKeyProps
type jsiiProxy_ISSMSecureIAMAccessKeyProps struct {
	_ byte // padding
}

func (j *jsiiProxy_ISSMSecureIAMAccessKeyProps) ParameterName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"parameterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISSMSecureIAMAccessKeyProps) Region() *string {
	var returns *string
	_jsii_.Get(
		j,
		"region",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISSMSecureIAMAccessKeyProps) User() awsiam.IUser {
	var returns awsiam.IUser
	_jsii_.Get(
		j,
		"user",
		&returns,
	)
	return returns
}


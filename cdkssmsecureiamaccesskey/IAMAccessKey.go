package cdkssmsecureiamaccesskey

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// The IAMAccessKey created is stored JSON.stringified using this interface.
type IAMAccessKey interface {
	AccessKeyId() *string
	SetAccessKeyId(a *string)
	SecretAccessKey() *string
	SetSecretAccessKey(s *string)
}

// The jsii proxy for IAMAccessKey
type jsiiProxy_IAMAccessKey struct {
	_ byte // padding
}

func (j *jsiiProxy_IAMAccessKey) AccessKeyId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"accessKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAMAccessKey)SetAccessKeyId(val *string) {
	if err := j.validateSetAccessKeyIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"accessKeyId",
		val,
	)
}

func (j *jsiiProxy_IAMAccessKey) SecretAccessKey() *string {
	var returns *string
	_jsii_.Get(
		j,
		"secretAccessKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAMAccessKey)SetSecretAccessKey(val *string) {
	if err := j.validateSetSecretAccessKeyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"secretAccessKey",
		val,
	)
}


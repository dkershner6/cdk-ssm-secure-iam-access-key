// Creates an IAM Access Key for a provided IAM User and stores the result in an SSM SecureString Parameter
package cdkssmsecureiamaccesskey

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterInterface(
		"cdk-ssm-secure-iam-access-key.IAMAccessKey",
		reflect.TypeOf((*IAMAccessKey)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "accessKeyId", GoGetter: "AccessKeyId"},
			_jsii_.MemberProperty{JsiiProperty: "secretAccessKey", GoGetter: "SecretAccessKey"},
		},
		func() interface{} {
			return &jsiiProxy_IAMAccessKey{}
		},
	)
	_jsii_.RegisterInterface(
		"cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps",
		reflect.TypeOf((*ISSMSecureIAMAccessKeyProps)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "parameterName", GoGetter: "ParameterName"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberProperty{JsiiProperty: "user", GoGetter: "User"},
		},
		func() interface{} {
			return &jsiiProxy_ISSMSecureIAMAccessKeyProps{}
		},
	)
	_jsii_.RegisterClass(
		"cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey",
		reflect.TypeOf((*SSMSecureIAMAccessKey)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_SSMSecureIAMAccessKey{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
}

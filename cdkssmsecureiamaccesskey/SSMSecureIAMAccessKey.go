package cdkssmsecureiamaccesskey

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/dkershner6/cdk-ssm-secure-iam-access-key/cdkssmsecureiamaccesskey/jsii"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/dkershner6/cdk-ssm-secure-iam-access-key/cdkssmsecureiamaccesskey/internal"
)

// Custom resource that creates a new IAM access key for the given user, then stores the AccessKeyId and Secret in a SSM SecureString Parameter.
//
// Returns: (Not actually returned) The Value of the Parameter is the JSON representation of the AccessKeyId and Secret:.
// See: IAMAccessKey * Example: { "accessKeyId": "AKIAXXXXXXXXXXXXXXXX", "secretAccessKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" }
//
// Give permission to use this secret SSM Parameter:
// ssm.StringParameter.fromSecureStringParameterAttributes(this, "ID", {
// parameterName: this.props.parameterName,
// });.
//
type SSMSecureIAMAccessKey interface {
	constructs.Construct
	// The tree node.
	Node() constructs.Node
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for SSMSecureIAMAccessKey
type jsiiProxy_SSMSecureIAMAccessKey struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_SSMSecureIAMAccessKey) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


func NewSSMSecureIAMAccessKey(scope constructs.Construct, id *string, props ISSMSecureIAMAccessKeyProps) SSMSecureIAMAccessKey {
	_init_.Initialize()

	if err := validateNewSSMSecureIAMAccessKeyParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_SSMSecureIAMAccessKey{}

	_jsii_.Create(
		"cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewSSMSecureIAMAccessKey_Override(s SSMSecureIAMAccessKey, scope constructs.Construct, id *string, props ISSMSecureIAMAccessKeyProps) {
	_init_.Initialize()

	_jsii_.Create(
		"cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey",
		[]interface{}{scope, id, props},
		s,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func SSMSecureIAMAccessKey_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateSSMSecureIAMAccessKey_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_SSMSecureIAMAccessKey) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		s,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}


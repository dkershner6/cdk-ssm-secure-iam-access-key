//go:build !no_runtime_type_checking

package cdkssmsecureiamaccesskey

import (
	"fmt"
)

func (j *jsiiProxy_IAMAccessKey) validateSetAccessKeyIdParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_IAMAccessKey) validateSetSecretAccessKeyParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}


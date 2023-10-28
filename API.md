# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SSMSecureIAMAccessKey <a name="SSMSecureIAMAccessKey" id="cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey"></a>

Custom resource that creates a new IAM access key for the given user, then stores the AccessKeyId and Secret in a SSM SecureString Parameter.

> [IAMAccessKey * Example: { "accessKeyId": "AKIAXXXXXXXXXXXXXXXX", "secretAccessKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" }

Give permission to use this secret SSM Parameter:
ssm.StringParameter.fromSecureStringParameterAttributes(this, "ID", {
parameterName: this.props.parameterName,
});](IAMAccessKey * Example: { "accessKeyId": "AKIAXXXXXXXXXXXXXXXX", "secretAccessKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" }

Give permission to use this secret SSM Parameter:
ssm.StringParameter.fromSecureStringParameterAttributes(this, "ID", {
parameterName: this.props.parameterName,
});)

#### Initializers <a name="Initializers" id="cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.Initializer"></a>

```typescript
import { SSMSecureIAMAccessKey } from 'cdk-ssm-secure-iam-access-key'

new SSMSecureIAMAccessKey(scope: Construct, id: string, props: ISSMSecureIAMAccessKeyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps">ISSMSecureIAMAccessKeyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps">ISSMSecureIAMAccessKeyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.isConstruct"></a>

```typescript
import { SSMSecureIAMAccessKey } from 'cdk-ssm-secure-iam-access-key'

SSMSecureIAMAccessKey.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-ssm-secure-iam-access-key.SSMSecureIAMAccessKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IAMAccessKey <a name="IAMAccessKey" id="cdk-ssm-secure-iam-access-key.IAMAccessKey"></a>

- *Implemented By:* <a href="#cdk-ssm-secure-iam-access-key.IAMAccessKey">IAMAccessKey</a>

The IAMAccessKey created is stored JSON.stringified using this interface.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-secure-iam-access-key.IAMAccessKey.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-secure-iam-access-key.IAMAccessKey.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="cdk-ssm-secure-iam-access-key.IAMAccessKey.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="cdk-ssm-secure-iam-access-key.IAMAccessKey.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

### ISSMSecureIAMAccessKeyProps <a name="ISSMSecureIAMAccessKeyProps" id="cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps"></a>

- *Implemented By:* <a href="#cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps">ISSMSecureIAMAccessKeyProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps.property.user">user</a></code> | <code>aws-cdk-lib.aws_iam.IUser</code> | *No description.* |
| <code><a href="#cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps.property.user"></a>

```typescript
public readonly user: IUser;
```

- *Type:* aws-cdk-lib.aws_iam.IUser

---

##### `region`<sup>Optional</sup> <a name="region" id="cdk-ssm-secure-iam-access-key.ISSMSecureIAMAccessKeyProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---


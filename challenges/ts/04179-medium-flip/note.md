# 4179 - Flip

Implement the type of `just-flip-object`, i.e. swap the property keys and values. It is assumed that values are always capable to be property keys.

This can be solved using mapped type with some tricks:

```typescript
type Flip<T> = {
  [P in keyof T as `${T[P]}`]: P;
}
```

Now TypeScript complains `T[P]` cannot be assigned with some types. To fix this, we have to constrain the type of T to be `Record<string, any>` or a wider `Record<PropertyKey, any>`, since the flipped object will always have a string value. For the property keys, we have gotten coerced into string.

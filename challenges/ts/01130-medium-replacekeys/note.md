# 1130 - Replace Keys

Given a union type `U`, some keys as a union type `T`, and an object `Y` containing properties whose key may be in `T`, implement a type `ReplaceKeys<U, T, Y>` which will replace the keys of `T` in `U` with values from `Y`. However if some keys in `T` does not have new values, assign them `never` in the result type.

This requires both mapped types and conditional types.

First we map all the property keys in `U`, to their original values or to their replaced values. If the mapped key is seen in `T`, check if `U` has its corresponding new value. If so, assign the key with the new value. Otherwise, assign the key with `never`.

```typescript
type ReplaceKeys<U, T, Y> = {
  [P in keyof U]: P extends T
    ? P extends keyof Y
      ? Y[P]
      : never
    : U[P];
}
```

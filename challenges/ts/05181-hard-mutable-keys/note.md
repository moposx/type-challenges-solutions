# 5181 - Mutable Keys

Implement the advanced util type `MutableKeys`, which picks all the mutable (not readonly) keys into a union.

We've done the challenge of finding [readonly keys](../00005-extreme-readonly-keys/note.md), now we just create a new object containing only the mutable keys and use `keyof` to get a union of their keys.

```typescript
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

type IsReadOnlyKey<T, K extends keyof T> = IsEqual<Pick<T, K>, Readonly<Pick<T, K>>>;

type GetMutableProperties<T> = {
  [P in keyof T as IsReadOnlyKey<T, P> extends false ? P : never]: T[P];
};

type MutableKeys<T> = keyof GetMutableProperties<T>;
```

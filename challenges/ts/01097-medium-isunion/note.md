# 1097 - IsUnion

Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

Still we need to rely on the distributivity of conditional types acting on generics given to union types. For a union type `T`, given its replica `U = T`, first test whether they're holding thr same types by `T extends U` (distributively). Next, compare them by `[U] extends [T]` where, due to the former type check, `T` has been a new union type of the results of each of `T`'s member with `U` applied. However, `U` is always identical to the original `T`, so for union types, `[U]` and `[T]` will never be the same. For non-union types, `[U]` will be equal to `[T]`.

Also, do not forget that empty types is never a union type.

```typescript
type IsUnion<T, U = T> = [T] extends [never]
  ? false // empty types is not union type
  : T extends U // distributive conditional types
    ? [U] extends [T] // check if non-distributive conditional types will return a different result
      ? false // not a union type
      : true // is a union type
    : false;
```

# 4425 - Greater Than

In This Challenge, You should implement a type `GreaterThan<T, U>` like `T` > `U`.

Negative numbers do not need to be considered.

Since we cannot directly compare number in TypeScript's typing system, we have to borrow the power of arrays. Accessing the `length` property of an array will return a number as literal type, which then can be used for comparison with `extends`. We need to pass the mutated array to every call of `GreaterThan`.

```typescript
type GreaterThan<
  T extends number,
  U extends number,
  C extends any[] = [] // empty initially
> = T extends C['length'] //
  ? false
  : U extends C['length']
    ? true
    : GreaterThan<T, U, [...C, 1]>;
```

This will compare `T`, `U` and a natural number starting from 0. If both `T` and `U` is not equal to the number, the number then will increment by 1, and repeat the comparison. If `T` is greater than `U`, then while `T` is not possible to be equal to the number, `U` will be equal to the number.

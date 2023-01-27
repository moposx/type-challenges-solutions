# 4484 - IsTuple

Implement a type `IsTuple`, which takes an input type `T` and returns whether `T` is tuple type.

The criteria of that `T` is a union includes:

1. `T` cannot be `never`
2. `T` should be a readonly array.
3. `T` is an array of pre-defined length.

For 1, we use `[T] extends [never]` to check if `T` is of type `never`.

For 2, we use `[T] extends readonly any[]` to check if `T` is an array that is readonly.

For 3, we use `number extends T['length']` to check if the length of the array is number literal instead of `number` type, which is one of the tuple's features.

```typescript
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T['length']
      ? false
      : true
    : false;
`

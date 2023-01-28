# 4471 - Zip

In This Challenge, You should implement a type `Zip<T, U>`, `T` and `U` **must** be `Tuple`.

We can know from the test cases that either `T` or `U` is empty, then the result will be an empty array.

To zip two arrays, we create a array consisting of the first elements of `T` and `U`, push that array into the to-be-returned array, and then do the same logic on the rest part of the array until one of the arrays is exhausted.

```typescript
type Zip<
  T extends any[],
  U extends any[]
> = T extends [infer TFirst, ...infer TRest]
  ? U extends [infer UFirst, ...infer URest]
    ? [[TFirst, UFirst], ...Zip<TRest, URest>]
    : []
  : [];
```

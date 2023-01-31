# 5360 - Unique

Implement the type version of `Lodash.uniq`, Unique takes an Array `T`, returns the Array `T` without repeated values.

We use an auxiliary array `U` to store the de-duplicated version of array `T`. We then start from the first element of `T`, check if it has been put into the auxiliary array. Because we have to deal with some special values like `never`, which is only assignable to itself. So we need a better equality checker `Equal` which is already provided by the utilities of Type Challenges. By checking current element's membership in the auxiliary array, we can filter the duplicated elements out. Finally we get the deduplicated version of the given array.

```typescript
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

type In<
  T extends any[], E
> = T extends [infer First, ...infer Rest]
  ? IsEqual<First, E> extends true
    ? true
    : In<Rest, E>
  : false;

type Unique<
  T extends any[],
  U extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? In<U, First> extends true
    ? Unique<Rest, U>
    : Unique<Rest, [...U, First]>
  : U;
```

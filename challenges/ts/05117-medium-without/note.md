# 5117 - Without

Implement the type version of `Lodash.without`, `Without<T, U>` takes an Array `T`, number or array `U` and returns an Array without the elements of `U`.

Since `U` is constrained to be either `number` or array `any[]`, we have to cope with more cases.

First let's write the basic type definition:

```typescript
type Without<
  T extends any[],
  U extends number | any[]
> = any;
```

The simple case is when `U` is a number, in which we just recursively take the first element from `T` and check if it is equal to `U`. If so, we remove it and pass the mutated array into next recursive call. Finally, we get an array with all elements equal to `U` stripped.

In the case that `U` is an array, we have to make comparison with its elements instead of itself. That is, `U['number']`. Therefore we should determine `U`'s type before we do the comparsion. Also, since we need recursion to complete the job, an auxiliary storage is necessary. We will add a `V` parameter which is initally an empty array.

```typescript
type Without<
  T extends any[],
  U extends number | any[],
  V extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? First extends (U extends any[] ? U[number] : U)
    ? Without<Rest, U, V>
    : Without<Rest, U, [...V, First]>
  : V;
```

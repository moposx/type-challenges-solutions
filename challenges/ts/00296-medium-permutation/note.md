# 296 - Permutation

Implement permutation type that transforms union types into the array that includes permutations of unions.

We know that permutation problems can be solved using recursion. Here for `Permutation<T>`, it is implied that it has an equivalent: `Permutation<T, U = T>`. When `U` and `T` are identical, we will get all possible permutations of `T`.

We must handle the case in which `T` is of `never` type. Since conditional types applies on union types distributively, we need to wrap `T` and `never` using square brackets:

```typescript
type Permutation<T, U extends T = T> = [T] extends [never]
  ? [] // if `T` is `never`, return an empty array as a result.
  ...
```

For non-never `T`, let TypeScript infer the actual type of `U` which is possibly `T` itself. Also, when `U` is of `never` type, return an empty array as a result. Otherwise, recursively put `U` into the result array, plus the result of recursive call of `Permutation` on the rest part of `T`, which can be achieved using `Exclude`:

```typescript
type Permutation<T, U extends T = T> = [T] extends [never]
  ? []
  : U extends infer V
    ? [V, ...Permutation<Exclude<T, V>>]
    : [];
```

# 8767 - Combination

Given an array of strings, do Permutation & Combination.

First fetch a union of string from the given array using `T[number]` since strings themselves are part of the permutation. To get the combination, for every given string, get its combinations by recusively applying `Combination`. By using conditional types' distributivity on generics, this can be done:

```typescript
type Combination<
  T extends string[],
  U = T[number],
  V = U
> = U extends string
  ? U | `${U} ${Combination<[], Exclude<V, U>>}`
  : never;
```

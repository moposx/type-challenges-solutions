# 533 - Concat

Implement the JavaScript `Array.concat` function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order.

We know that `Array.concat` merges two arrays, without modifying the existing arrays but returns a new array.

By saying the new array is in "ltr" order, given two array `T` and `U`, all the elements in `T` should precede those ones of `U` in the returned array.

```typescript
// let T and U becomes array of any type.
// then, use rest elements to merge the arrays, following ltr order.
type Concat<T extends any[], U extends any[]> = [...T, ...U];
```

# 3057 - Push

Implement the generic version of `Array.push`.

Note that the result should be a new array instead of the new length of the original array.

This is easy to solve using the rest elements.

```typescript
// T is an array of any type, U is any value.
// A new array is created, with all elements in T extracted, plus U.
type Push<T extends any[], U> = [...T, U];
```

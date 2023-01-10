# 898 - Includes

Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.

Consider that, if a value `V` is inside the array `Arr`, traversing the array we will absolutely getting a equality between a certain element in that array and `V`. By doing so recursively with TypeScript's typing system, the problem is solved.

```typescript
// For a non-empty array T, extract the first element. Otherwise, return `false`.
type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  // check if that element is equal to the given value `U`. If so, return true.
  // Otherwise, recursively do this procedure with the rest elements in the array `T`.
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false
```

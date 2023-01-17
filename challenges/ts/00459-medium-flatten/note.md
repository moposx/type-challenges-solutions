# 459 - Flatten

Write a type `Flatten` that takes an array and emitted the flatten array type.

It can be derived from the description that `Flatten` is actually `Flatten<T extends any[] = []>`.

We need to study some cases:

* An empty array is passed in.
* An nested array is passed in. Note that we need to check from the start of the array.
  * The nested array consists of values and other nested arrays.
  * The nested array consists of only other nested arrays.

```typescript
type Flatten<T extends any[] = []> = T extends [infer First, ...infer Rest]
  ? First extends any[] // check the first element's type - value or array.
    ? [...Flatten<First>, ...Flatten<Rest>] // array again, recursively call `Flatten`
    : [First, ...Flatten<Rest>] // else, put the value into the result array
    // and recursively call `Flatten` on the rest part of the array.
  : T; // empty array, return it as-is.
```

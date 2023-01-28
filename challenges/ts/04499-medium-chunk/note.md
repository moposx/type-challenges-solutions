# 4499 - Chunk

`Chunk<T, N>` accepts two required type parameters, the `T` **must** be a tuple, and the `N` **must** be an integer >= 1.

Every chunk will at least contain one element from `T`. If the length of `T` is greater than `N`, then the leftmost chunk will contain all rest elments after the second last chunking operation. If `N` is greater than `T`'s length, there're less chunks that are evetually produced.

We use recursion to do the chunking, so we need an auxiliary storage for previous result.

```typescript
type Chunk<
  T extends any[] = [],
  N extends number = 1,
  Arr extends any[] = []
> = Arr['length'] extends N // there're enough chunks, append a chunk of all rest elements
  ? [Arr, ...Chunk<T, N>]
  : T extends [infer First, ...infer Rest] // else, check if the given array still has elements
    ? Rest extends []  // empty array, this means that only 1 element is left
      ? [[...Arr, First]] // append that element to the result
      : Chunk<Rest, N, [...Arr, First]> // else, chunk the rest part of the array recursively.
      : []; // T is an empty array
```

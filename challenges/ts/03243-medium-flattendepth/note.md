# 3243 - FlattenDepth

Recursively flatten array up to depth times (by default 1).

Namely, we need to implement type `FlattenDepth<T,N>` where `T` is the given type to be flattened and `N` is the times for which we should perform the the flattening.

This means we need to record the operations we've done, including times and intermediate results. To do so, add two optional arguments to `FlattenDepth<T,N>`:

```typescript
type FlattenDepth<
  T extends any[],        // the given type to be flattened
  N extends number = 1,   // for how many times should we flatten the given type
  R extends any[] = [],   // returned result of flattening operation
  C extends any[] = []    // count recursion calls by pushing new elements into the array
> = any;
```

Then, flatten the given type recursively:

```typescript
type FlattenDepth<
  T extends any[],        // the given type to be flattened
  N extends number = 1,   // for how many times should we flatten the given type
  R extends any[] = [],   // returned result of flattening operation
  C extends any[] = []    // count recursion calls.
> = T extends [infer First, ...infer Rest]
  ? C['length'] extends N  // check if we've done flattening for required times
    ? [...R, ...T]
    : First extends any[] // recursively flatten the object based on the first element's type
      // pushing `1` into the array so we can record how many times we've done flattening
      ? FlattenDepth<Rest, N, [...R, ...FlattenDepth<First, N, [], [...C, 1]>]>
      : FlattenDepth<Rest, N, [...R, First], C>
  : R;
```

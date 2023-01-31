# 5310 - Join

Implement the type version of `Array.join`, `Join<T, U>` takes an Array `T`, string or number `U` and returns the Array `T` with `U` stitching up.

This is similar to [2070 - Drop Char](../02070-medium-drop-char/). We simply take the first element from the array, then append `U` to it, and recursively repeat this process. However, we must handle the case that there's only one element in `T`, in which we should not append the given character to it.

We let TypeScript infer the structure of the array as `[infer First, ...infer Rest]`. We take care of `Rest`'s length: if it's 0, then the array only has one element. Since both `First` and `Rest` will be used as string and array respectively, we need to constrain their types in inference.

Then we write:

```typescript
type Join<
  T extends any[],
  U extends string | number
> = T extends [infer First extends string, ...infer Rest extends any[]]
  ? Rest['length'] extends 0
    ? `${First}`
    : `${First}${U}${Join<Rest, U>}`
  : ''
```

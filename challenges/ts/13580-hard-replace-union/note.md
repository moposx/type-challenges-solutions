# 13580 - Replace Union

Given an union of types and array of type pairs to replace (`[[string, number], [Date, null]]`), return a new union replaced with the type pairs.

We first extract a mapping `S -> T` from the type pairs: if we manage to find a `S`, then we just replace it with `T`. To find a such `S`, we make use of the distributivity of conditional types acting on generic union types:

```typescript
type Match<T, U> = T extends U ? T : never;
type result =  Foo<string | number | symbol | boolean, string> // string
```

If current mapping is not applicable, we repeat the process using recursion on the rest mappings in the type pairs. Therefore, on matching that mapping we should return the `T`. If the type pairs is empty, we simply return the given union type.

```typescript
type UnionReplace<
  T,
  U extends [any, any][]
> = U extends [[infer Source, infer Target], ...infer Rest extends [any, any][]]
  ? T extends Source
    ? Target                    // exact match for the mapping
    : UnionReplace<T, Rest>     // continues to search matched mappings
  : T;
```

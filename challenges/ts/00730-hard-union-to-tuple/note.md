# 730 - Union to Tuple

Implement a type, `UnionToTuple`, that converts a union to a tuple.

Again we need to utilize the knowledge of covariance and contravariance. The basic idea is first to convert the given union type into an intersection type and collecting them one by one.

Function parameters are both covariant and contravariant in TypeScript. In [55-Union-to-Intersection](../00055-hard-union-to-intersection/note.md) we've create such a type that does the magic:

```typescript
type UnionToIntersection<U> =
  (U extends U
    ? (arg: U) => void
    : never
  ) extends (arg: infer R) => void
    ? R
    : never;
```

OK, fine, I copied these from some smart guys (I'm sorry but I can't figure out the problem) and it takes me so long to fully understand how does it work:

```typescript
type UnionToTuple<T> = UnionToIntersection<
  (T extends T ? () => T : never)          // (1)
> extends () => infer R                    // (2)
  ? [...UnionToTuple<Exclude<T, R>>, R]    // (3)
  : [];
```

For example, we're passing `string | number` to `UnionToTuple`:

(1) Remeber how `extends` works? When it is acting generics union types, it will manifest its quality of being distributive. Here the result is `(() => string) | (() => number)`.

(2) After applying `UnionToIntersection`, we got `(() => string) & (() => number)`. after (2), R will be the last single one type inferred from the given intersection types: `number`.

(3) By pushing that single type into the result array and repeat the process on the rest single types in `T`, we will finally get the tuple as a result. When T is exhausted, we return an empty array.

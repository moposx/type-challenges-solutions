# 9160 - Assign

You have a target object and a source array of objects. You need to copy property from source to target, if it has the same property as the source, you should always **keep the source property**, and drop the target property. (Inspired by the `Object.assign` API)

We've known how to merge two objects in [Merge](../00599-medium-merge/note.md):

```typescript
type Merge<F, S> = {
  [P in (keyof F | keyof S)]: P extends keyof S
    ? S[P]
    : P extends keyof F
      ? F[P]
      : never;
}
```

Note that, for conflicting properties, the ones from `S` will override those ones in `T`.

Back to this problem, it should be noted that the first parameter of `Assign<T, U>` is the *target* object and the second paramter is an array of source objects. Since we need to preserve the properties of the source objects when there're conflicts, we just use the very same `Merge` as mentinoed above.

The whole logic is trivial, but looking at the test cases we know that we should be careful about non-properties objects passed in. A simple check will be sufficient:

```typescript
type Assign<
  T extends Record<string, unknown>,
  U
> = U extends [infer First, ...infer Rest extends object[]]
  ? Assign<First extends object ? Merge<T, First> : T, Rest>
  : T;
```

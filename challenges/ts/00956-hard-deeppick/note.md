# 956 - Deep Pick

Implement a type `DeepPick`, that extends Utility types `Pick`. A type takes two arguments.

For single-level objects, `DeepPick` works just in the same manner of `Pick`. When it is faced with nested objects, how do we handle the property path?

Well, we know that the property accessing grammar is: `foo.bar`, so we can extract useful information from the path and try to reach the inner level of the given object.

Since the target properties keys can be offered as a union, we need to map the deep picking to every key. We can make use of the distributivity of conditional types acting on union types in generics. Eventually we got a series of properites as a union, and we need to combine them together as per the requirements, which need `UnionToIntersection` as we've done in [UnionToIntersection](../00055-hard-union-to-intersection/note.md):

```typescript
type DeepPick<
  T extends Record<PropertyKey, any>,
  K extends string
> = UnionToIntersection<K extends K ? _DeepPick<T, K> : never>;
```

Then let's implement the deep picking type:

```typescript
type _DeepPick<
  T extends Record<PropertyKey, any>,
  K extends PropertyKey
> = K extends keyof T
  ? { [P in K]: T[P] }  // simplest case, just return the property
  : K extends `${infer Obj}.${infer Prop}`  // analyze the path
    ? {
        [_ in Obj]: Prop extends [] // if Prop is empty
          ? T[Obj] // falling back, return T[Obj]
          : _DeepPick<T[Obj], Prop> // recursion, entering into the deeper level
      }
    : never;
```

Note that we need to constrain `T` and `K` or TypeScript will get trouble analyzing the types.

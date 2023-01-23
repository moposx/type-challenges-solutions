# 2946 - ObjectEntries

Implement the type version of `Object.entries`.

The `Object.entries()` static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

Using mapped types, it's easy to write:

```typescript
type ObjectEntries<T> = {
  [P in keyof T]: [P, T[P]]
} [keyof T];
```

However some tests has failed.

```typescript
Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
```

This failed since the final type still considers those properties optional. We can mark them as required by using `Required<T>` or by adding the optionality modifier prepended with `-`, which is `-?`.

After that, we find that we must also handle the case in which the property values are possibly undefined, which is also introduced by `Partial`. We'd better write another type to handle it:

```typescript
type HandleUndefined<
  T,
  K extends keyof T
> = T[K] extends infer R | undefined
  ? R
  : undefined;
```

which will bring explicit value type, either `undefined` or certain concrete type.

The complete solution is:

```typescript
type HandleUndefined<
  T,
  K extends keyof T
> = T[K] extends infer R | undefined
  ? R
  : undefined;

type ObjectEntries<T> = {
  [P in keyof T]-?: [P, HandleUndefined<T, P>];
}[keyof T];
```

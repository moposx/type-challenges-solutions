# 4 - Pick

`Pick<Type, Keys>` is available since TypeScript 2.1.

`Pick<Type, Keys>` will:
> Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

First, the built-in `Pick<Type, Keys>`'s second type parameter `Keys` is some keys that are expected to be in `Type`, i.e. that in `MyPick<T, K>`, the `K` must be assignable to `keyof T`. Therefore, `K` should be constrained to `K extends keyof T`.

Second, a new type should be created from the generic type `T` and `K`. To achieve this, mapped types will be used to create a type that has a property key type of `K` and a value type corresponding to that property key `K`, which is also in the type `T`， so the solution will be:

```typescript
type MyPick<T, K extends keyof T> = {
  [prop in K]: T[prop]
}
```

For the consistency in the naming of type paramters, `prop` can be replaced by `P`.

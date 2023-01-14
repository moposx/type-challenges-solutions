# 8 - Readonly 2

Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

`K` specify the set of properties of `T` that should set to `Readonly`. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

It is implied that in `MyReadonly2<T, K>`, `K` should have a default value of `keyof T`. In TypeScript,to make certain generic parameters optional, use `=` in the type declaration:

```typescript
// now `K` is optional. If `K` is not provided, it'll be `keyof T`.
type MyReadonly2<T, K extends keyof T = keyof T> = {};
```

We need to combine two types: one that consists of all properties set readonly in the given `T` with their keys in `K`; the other one that has the rest properties whose keys are not in `K`.

We can use the intersection type to achieve this. When creating an intersection type from types, if there're properties that shares the same name and type but have different modifiers, TypeScript will choose the property with a wider type. Therefore, we can create a readonly version of `T`, then build an intersection type with it and the rest properties that are not specified to be readonly:

```typescript
type MyReadonly2<
  T,
  K extends keyof T = keyof T
> = Readonly<T> & Pick<T, Exclude<keyof T, K>>;
```

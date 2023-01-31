# 5821 - MapTypes

Implement `MapTypes<T, R>` which will transform types in object `T` to different types defined by type `R` which has the following structure

```typescript
type StringToNumber = {
  mapFrom: string; // value of key which value is string
  mapTo: number; // will be transformed for number
}
```

Note that `R` can be a union type. If the type doesn't exist in the map, leave it as it was.

We should first constrain the generic parameter `R` to `R extends { mapFrom: any, mapTo: any }`. For every property in `T`, we shuold check whether its type is in the transforming map. However, since `R` can be possibly a union type, we need to make use of the power of the distributiviy of conditional types applying on the generic types. We will write `R extends { mapFrom: T[P] }` which will check if any single types of `R` matches the mapping interface `{ mapFrom: T[P] }`. Once we've got the matched one, transforming will happen.

```typescript
type MapTypes<
  T,
  R extends { mapFrom: any, mapTo: any }> = {
  [P in keyof T]: T[P] extends R['mapFrom']
    ? R extends { mapFrom: T[P]}
      ? R['mapTo']
      : never
    : T[P];
}
```

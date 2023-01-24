# 2759 - Required by Keys

Implement a generic `RequiredByKeys<T,  K>` which takes two type argument `T` and `K`.

`K` specify the set of properties of `T` that should set to be required. When `K` is not provided, it should make all properties required just like the normal `Required<T>`.

To mark certain properties as required. use `-?` modifier. Thus we create a mapped type that mark all properties with their keys in `K` as required, then intersect the produced type with all other non-required properties using `Omit<T, K`. Finally, flatten the new type so `Equal` will return true from the comparison from the result and the expected new type.

```typescript
type Flatten<T> = {
  [P in keyof T]: T[P];
}

type RequiredByKeys<T, K extends keyof T = keyof T> = Flatten<
  {
    [P in K]-?: T[P]
  } & Omit<T, K>
>
```

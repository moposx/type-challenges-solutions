# 7 Readonly

`Readonly<Type>` is available since TypeScript 2.1.

It will:

> Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

This can be done via mapped types. Also, adding a `readonly` mapping modifier will create a frozen version of the originial type.

```typescript
type MyReadonly<T> = {
  +readonly [P in keyof T]: T[P];
}
```

The `+` is optional as it is assumed to be there if no mapping modifier is explicitly specified.

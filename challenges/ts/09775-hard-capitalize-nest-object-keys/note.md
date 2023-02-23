# 9775 - Capitalize Nest Object Keys

Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.

Generic type `CapitalizeNestObjectKeys<T>` only receives one argument. Since we need to capitalize the property keys of the nested objects and those properties' values may be an array, we leave the `T` unconstrained.

When `T` is an array, we just create an object from it, applying `CapitalizeNestObjectKeys<T>` to the members. Otherwise we just capitalize the properties's keys (do not forget to add type constraints; only if the keys' type can somehow be assigned with `string`, they can be capitalized using the built-in `Capitalize` type). To handle nested objects, we apply `CapitalizeNestObjectKeys<T>` to those properties' values.

```typescript
type CapitalizeNestObjectKeys<T> = T extends Array<any>
  ? { [P in keyof T]: CapitalizeNestObjectKeys<T[P]>; }
  : {
      [P in keyof T as P extends string
        ? Capitalize<P>
        : never]: CapitalizeNestObjectKeys<T[P]>;
    };
```

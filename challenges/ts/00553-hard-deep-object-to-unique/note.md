# 553 - Deep Object to Unique

TypeScript has structural type system, but sometimes you want a function to accept only some previously well-defined unique objects (as in the nominal type system), and not any objects that have the required fields.

Create a type that takes an object and makes it and all deeply nested objects in it unique, while preserving the string and numeric keys of all objects, and the values of all properties on these keys.

The original type and the resulting unique type must be **mutually assignable**, but **not identical**.

TypeScript has a built-in type called `unique symbol` which is a subtype of `symbol`. By inserting such a type inside an object type, that object type becoms unique while preserving all pre-existing properties. This meets the second need:

> The original type and the resulting unique type are not identical.

Then to make these two types mutually assignable, we mark the unique symbol type as optional.

Done!

```typescript
declare const UNIQUE_SYMBOL: unique symbol;

type DeepObjectToUniq<O extends object> = {
  [P in keyof O]: O[P] extends object
    ? O[P] extends Function
      ? O[P]
      : DeepObjectToUniq<O[P]> & {
        // unique symbol-value properties must be readonly
        // tied a current-object-related value to that symbol
        readonly [UNIQUE_SYMBOL]?: [O, P]
      }
    : O[P]
} & {
  // tied a current-object-related value to that symbol
  readonly [UNIQUE_SYMBOL]?: [O]
}
```

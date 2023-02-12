# 1383 - Camelize

Implement `Camelize` which converts object from snake_case to to camelCase.

We first create a utility type `IntoCamelCase<S>` which converts a given string in snake_case into camelCase:

```typescript
type IntoCamelCase<
  S extends string
> = S extends `${infer First}_${infer Rest}`
  ? `${First}${IntoCamelCase<Capitalize<Rest>>}`
  : S;
```

Then we will unfold the given object and try to Camelize every property's name: for tuple types, camelize its every element and for nested objects, recursively camelize them:

```typescript
type Camelize<T> = T extends any[]
  ? T extends [infer First, ...infer Rest]
    ? [Camelize<First>, ...Camelize<Rest>]
    : []
  : T extends object
    ? {
        // IntoCamelCase only accepts string type so we need casting
        [P in keyof T as (P extends string ? IntoCamelCase<P> : P)]: Camelize<T[P]>
      }
    : T;
```

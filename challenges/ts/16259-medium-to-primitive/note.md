# 16259 - To Primitive

Convert a property of type literal (label type) to a primitive type.

## Method 1

We can try checking if the property has a literal type (`string`, `number`, `boolean`) or a nested object using `extends`. For these literal type, return the corresponding primitive type. For nested objects, pass them into recursive application of `ToPrimitive`.

```typescript
type ToPrimitive<T> = {
  [P in keyof T]: T[P] extends string
    ? string
    : T[P] extends number
      ? number
      : T[P] extends boolean
        ? boolean
        : T[P] extends object
          ? ToPrimitive<T[P]>
          : never;
}
```

## Method 2

(Learn from [teamchong's solution](https://github.com/type-challenges/type-challenges/issues/22535), good job!)

Since we want primitive types from some property, we can call `valueOf` method and let TypeScript infer the return type, which is just what we need. For nested objects, pass them into recursive application of `ToPrimitive`.

```typescript
type ToPrimitive<T> = T extends object
  ? { [K in keyof T]: ToPrimitive<T[K] >
  : T extends { valueOf(): infer R }
    ? R
    : T;
```

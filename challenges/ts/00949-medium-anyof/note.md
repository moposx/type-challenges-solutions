# 949 - AnyOf

Implement Python liked `any` function in the type system. A type takes the `Array` and returns `true` if any element of the `Array` is `true`. If the `Array` is empty, return `false`.

First let's define what values are convertible to `false`:

```typescript
type AsBoolean<T> = T extends 0 | '' | false | [] | Record<keyof any, never> | undefined | null
  ? false
  : true;
```

Then, for every element starting from the first one in the array, if the element is convertible to `true`, just return `true`. For the case that the array is empty, return `false`. Else, recursively apply `AnyOf` on the rest part of the array until all the elements are all checked:

```typescript
type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? AsBoolean<First> extends true
    ? true
    : AnyOf<Rest>
  : false;
```

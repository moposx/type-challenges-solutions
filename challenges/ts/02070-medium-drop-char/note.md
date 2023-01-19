# 2070 - Drop Char

Implement type `DropChar<S, C>` to drop a specified char from a string.

An easy problem isn't it? Again template literals and inference will do the magic:

```typescript
type DropChar<
  S extends string,
  C extends string,
> = S extends `${infer First}${infer Rest}`
  ? First extends C
    ? DropChar<Rest, C>
    : `${First}${DropChar<Rest, C>}`
  : S;
```

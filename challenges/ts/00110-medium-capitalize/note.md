# 110 - Capitalize

Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest
as-is.

It is easy to extract the first letter then turn it into upper-case, then append the rest part of the given string.

```typescript
type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : S;
```

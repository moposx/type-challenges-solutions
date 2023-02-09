# 300 - String to Number

Convert a string literal to a number, which behaves like `Number.parseInt`.

TypeScript can easily check if a string looks like a number.

```typescript
type ToNumber<S extends string> = S extends `${infer N extends number}` ? N : never;
```

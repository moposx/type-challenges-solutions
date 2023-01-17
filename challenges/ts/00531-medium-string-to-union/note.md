# 531 - String to Union

Implement the `StringToUnion` type. Type take string argument. The output should be a union of input letters.

Simple recursion will do the magic. We need to an auxiliary storage to provide the latest result of union type in the earlier recursion, and that storage should be initialized with `never`.

```typescript
type StringToUnion<T extends string, U = never> = T extends `${infer First}${infer Rest}`
  ? StringToUnion<Rest, U | First>
  : U;
```

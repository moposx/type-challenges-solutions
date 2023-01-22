# 2693 - EndsWith

Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`.

```typescript
type EndsWith<
  T extends string,
  U extends string
> = T extends `${infer X}${U}`
  ? true
  : false
```

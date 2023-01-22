# 2688 - StartsWith

Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`.

This is really easy by using template literals:

```typescript
type StartsWith<
  T extends string,
  U extends string
> = T extends `${U}${infer Rest}`
  ? true
  : false;
```

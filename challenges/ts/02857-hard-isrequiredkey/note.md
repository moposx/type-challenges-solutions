# 2857 - IsRequiredKey

Implement a generic `IsRequiredKey<T, K>` that return whether `K` are required keys of `T`.

If `K` are the required keys in `T`, then `Required<Pick<T, K>>` is assignable to `T`.

```typescript
type IsRequiredKey<
  T,
  K extends keyof T
> = T extends Required<Pick<T, K>>
  ? true
  : false;
```

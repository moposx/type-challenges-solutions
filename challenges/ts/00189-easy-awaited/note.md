# 189 - Awaited

Implement `MyAwaited<T>`, where T is a Promise-like type, extracting the wrapped type inside `T`.

Since T should be promise-like, we can constraint T with the built-in generic type `PromiseLike<>`. As the wrapped type inside T can be unspecified, we assign `any` to `PromiseType<>`.

To extract the wrapped type inside T, we can use `infer` inside a ternary expression:

```typescript
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer V> ? _ : never;
```

Here the type of `V` can be either Promise-like or not. If it is Promise-like, recursively apply `MyAwaited<T>` to extract the wrapped type, or just return `V`. Therefore, another ternary expression will be used:

```typescript
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer V>
  ? V extends PromiseLike<any>>
    ? MyAwaited<V>
    : V
  : never;
```

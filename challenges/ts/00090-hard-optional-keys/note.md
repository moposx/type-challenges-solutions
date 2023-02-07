# 90 - Optional Keys

Implement the advanced util type `OptionalKeys<T>`, which picks all the optional keys into a union.

See [89-optional-keys](../ts/../00089-hard-required-keys/note.md).

```typescript
type GetOptional<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
};

type OptionalKeys<T> = keyof GetOptional<T>;
```

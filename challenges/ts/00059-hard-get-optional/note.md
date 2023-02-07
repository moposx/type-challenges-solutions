# 59 - Get Optional

Implement the advanced util type `GetOptional<T>`, which remains all the optional fields.

The logic is pretty similar to [57-get-required](../00057-hard-get-required/note.md), so refer to the notes.

```typescript
type GetOptional<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
};
```

# 89 - Required Keys

Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.

Since we've done [57-get-required](../00057-hard-get-required/note.md), we can easily get all the required properties as an object. To collect their keys, simply use `keyof`.

```typescript
type GetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};

type RequiredKeys<T> = keyof GetRequired<T>;
```

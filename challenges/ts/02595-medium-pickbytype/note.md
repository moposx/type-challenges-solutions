# 2595 - Pick by Type

From `T`, pick a set of properties whose type are assignable to `U`.

If a property's type is not assignable to `U`, it should be excluded from the final type:

```typescript
type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never] : T[P];
};
```

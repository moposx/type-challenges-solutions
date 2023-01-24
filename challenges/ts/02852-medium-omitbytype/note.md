# 2852 - Omit by Type

From `T`, pick a set of properties whose type are not assignable to `U`.

When mapping `T`'s properties, check if the property value is assignable to `U` and filter those properties whose value is assignable to `U` out.

```typescript
type OmitByType<T, U> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P];
};
```

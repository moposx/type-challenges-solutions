# 57 - Get Required

Implement the advanced util type `GetRequired<T>`, which remains all the required fields.

In TypeScript here's a `Required<T>` that will make all properties in `T` to be required. We can create a fully-required version of `T` as `U` and take every property out from the originial `T` and then check if it is equivalent to its counterpart in `U`. If so, this property is reserved. Otherwise, the property will be discarded. Finally we will get all required keys.

```typescript
type GetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};
```

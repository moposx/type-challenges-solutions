# 17973 - Deep Mutable

Implement a generic `DeepMutable` which make every parameter of an object - and its sub-objects recursively - mutable.

We will use `-` and `readonly` to mark certain types mutable. Using mapped types, checking the property value's type, the complex ones will be unfolded and marked mutable. We need to specially care about functions: they are also objects. So `T[P] extends Function` will and only will return `true` if the type of `T[P]` is exactly `Function`.

```typescript
type DeepMutable<T extends object> = {
  -readonly [P in keyof T]: T[P] extends object
    ? T[P] extends Function
      ? T[P]
      : DeepMutable<T[P]>
    : T[P];
};
```

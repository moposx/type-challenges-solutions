# 11 - Tuple to Object

Given an array, transform it into an object type and the key/value must be in the provided array.

This requires that given an array, an object whose keys and values are the same element in that array.

Therefore, the type of the given array must be valid as a object property key, namely `string`, `number` and `symbol`.

Note that TypeScript has a built-in type for that called `PropertyKey`.

To access an element in an array, an index will be needed. The index is of type `number`.

Therefore the solution is:

```typescript
// type PropertyKey = string | number | symbol (built-in, optinal)
type ArrayIndex = number; // optional
type TupleToObject<T extends readonly PropertyKey[]> = {
  [Prop in T[ArrayIndex]]: Prop;
}
```

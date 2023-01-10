# 3060 - Unshift

Implement the type version of `Array.unshift`.

Note that the result should be a new array instead of the new length of the original array.

This is easy to solve using the rest elements.

```typescript
// T is an array of any type, U is a value.
// Create a new array, U is added firstly, following all elements of T.
type Unshift<T extends any[], U> = [U, ...T];
```

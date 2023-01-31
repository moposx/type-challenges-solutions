# 5153 - IndexOf

Implement the type version of `Array.indexOf`, `indexOf<T, U>` takes an Array `T`, any `U` and returns the index of the first `U` in Array `T`.

We will use an auxiliary array `Index extends any[] = []` to track the index of how many elements we've skipped before meeting `U`. Also, since indices are zero-based, this exactly tells the very index of the target element.

We will start from the first element of the given array, check its equality to the `U` by checking that both `First extends U` and `U extends First` return `true`. If so, we just return the length of the auxiliary array, otherwise we recursively redo the process until the target is firstly found, or that the array is exhausted then -1 will be returned.

```typescript
type IndexOf<
  T extends any[],
  U,
  Index extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? (First extends U ? U extends First ? true : false : false) extends true
    ? Index['length']
    : IndexOf<Rest, U, [...Index, 1]>
  : -1;
```

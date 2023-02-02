# 09896 - Get Middle Element

Get the middle element of the array by implementing a `GetMiddleElement` method, represented by an array.

If the length of the array is odd, return the middle element. If the length of the array is even, return the middle two elements.

We can solve this by removing the first and the last element of the array and repeat the process. Since we have to pass a slice of the array to each recursion, we need the array to match the following pattern: `[any, infer Second, ...infer UntilSecondToLast, any]`, in which the array is guaranteed to have at least the first and the last elements. If the given array does not match the pattern, we just return it.

```typescript
type GetMiddleElement<
  T extends any
> = T extends [any, infer Second, ...infer UntilSecondToLast, any]
  ? GetMiddleElement<[Second, ...UntilSecondToLast]>
  : T;
```

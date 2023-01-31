# 5317 - LastIndexOf

Implement the type version of `Array.lastIndexOf`, `LastIndexOf<T, U>` takes an Array `T`, any U and returns the index of the last `U` in Array `T`.

Following [5313-Indexof](../05153-medium-indexof/), we need to construct an enhanced version of typed `Array.indexOf` that returns the last index of the target element. A trivial solution can be reversing the given array, then use `indexOf`. Or, pedatically, we still follow the idea in that problem with another auxiliary array called `TargetIndex extends any[] = []`.

When we meet the target element, we update the index record by setting `TargetIndex` to `Index`. Note that this value should be the number of how many elements we have skipped earlier. Otherwise, we keep the `TargetIndex` unmodified but increment `Index` by 1. When the array is exhausted, we should check whether `TargetIndex`'s length is 0, which means we failed to find such an element in the given array. Otherwise, the length of `TargetIndex` will be last index of the given target element.

```typescript
type LastIndexOf<
  T extends any[],
  U,
  Index extends any[] = [],
  TargetIndex extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? (First extends U ? U extends First ? true : false : false) extends true
    ? LastIndexOf<Rest, U, [...Index, 1], [...Index]>
    : LastIndexOf<Rest, U, [...Index, 1], TargetIndex>
  : 0 extends TargetIndex['length']
    ? -1
    : TargetIndex['length'];
```

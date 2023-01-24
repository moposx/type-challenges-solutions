# 3062 - Shift

Implement the type version of `Array.shift`.

This is easy using the array elements inference. We expect a pattern of array that in an array there's at least one element at the start and some or just no following rest elements. If the given array matches this pattern, we just return all rest elements as an array. Otherwise, return the given array itself.

```typescript
type Shift<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...Rest]
  : T;
```

# 3192 - Reverse

Implement the type version of `Array.reverse`.

This is trivial. The process of reversing an array is:

- Take the last element from the array
- Put it at the start of the new array
- Repeat 1, 2 on the rest part of the array.
- Finally return the new array which is a reversed version of the given array.

```typescript
type Reverse<T extends any[]> = T extends [...infer FirstN, infer Last]
  ? [Last, ...Reverse<FirstN>]
  : T;
```

# 8987 - Subsequece

Given an array of **unique** elements, return all possible subsequences.

A subsequence is a sequence that can be derived from an array by deleting some or no elements **without changing the order** of the remaining elements.

We must leave the order unchanged. Once we take the first element as part of a subsequence, to find every possible combination of elements to form new subsequences while still maintaining the order of elements, we should take these into consideration:

- The rest elements themselves can form new subsequences.
- The above subsequences can still combined with the first element to form one another series of subsequences.

By putting them together, we get the answer.

```typescript
type Subsequence<
  T extends any[]
> = T extends [infer First, ...infer Rest]
  ? [First, ...Subsequence<Rest>] | Subsequence<Rest>
  : [];
```

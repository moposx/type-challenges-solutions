# 18220 - Filter

Implement the type `Filter<T, Predicate>` takes an Array `T`, primitive type or union primitive type Predicate and returns an Array include the elements of Predicate.

Starting from the first elment of `T`, we check whether `Predicate` is assignable to it. If so, the elment will be reserved in the result array plus the returned elements produced by recursive application of `Filter`. Otherwise the elements is discarded and only the rest elements will be considered in next application of `Filter`. Finally we get all elements that does not match the predicate filtered out.

```typescript
type Filter<
  T extends any[],
  P
> = T extends [infer First, ...infer Rest]
  ? (First extends P  ? [First, ...Filter<Rest, P>]  : Filter<Rest, P>)
  : [];
```

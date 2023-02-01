# 7544 - Construct Tuple

Construct a tuple with a given length.

If the provided length is 0, return an empty array.

We need an auxiliary array `Acc extends unknown[]` to store the intermediate tuple, which is initially empty. Then we check if the given length is equal to the length of `Acc`. If so, return `Acc` as the result, otherwise recusively call `ConstructTuple` with `Acc` plus a `unknown` element.

```typescript
type ConstructTuple<
  L extends number = 0,
  Acc extends unknown[] = []
> = L extends Acc['length']
  ? Acc
  : ConstructTuple<L, [...Acc, unknown]>;
```

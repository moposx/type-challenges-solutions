# 08640 - Number Range

Implement `NumberRange<L, H>` which returns a union of integers with `L` and `H` (both of number type) as their lower bound and upper bound respectively.

To do this, we need an auxiliary array `Acc` to count, and a initially nothing type `R` to store the number range as a union type.

When both lower and upper bounds are reached, we return the `R` as the result. If the current count is less than the lower bound, pushing an element to `Acc` and recursively apply `NumberRange`. If the current count is greater than the lower bound but less than the upper bound, we increment the lower bound by 1 in every recursion and finnaly reach the upper bound, then return the result.

Here to make the code clear, we alias the `Array['length']` to `type Length<T extends any[]> = T['length']`. This means we cannot constrain `L` and `H` as `number` since the length will be a number literal type.

```typescript
type Length<T extends any[]> = T['length'];

type NumberRange<
  L,
  H,
  Acc extends unknown[] = [],
  R = never
> = L extends Length<Acc>
  ? H extends Length<Acc>
    ? R | Length<Acc>
    : NumberRange<Length<[...Acc, unknown]>, H, [...Acc, unknown], R | Length<Acc>>
  : NumberRange<L, H, [...Acc, unknown], R>;
```

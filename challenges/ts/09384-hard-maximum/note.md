# 9384 - Maximum

Implements a type `Maximum`, get array like type `T`, and return max value in `T`.

0 <= `T[number]` < 1000, so nagative number **not considered**.

If T is a empty array `[]`, just reutrn `never`.

TypeScript currently restrict the number of deepest level of recrusion at 1000. So we can use an auxiliary array to generate integers ranging from 0 to 1000 inclusively by reading its length.

To find the maximum number in an array we just pick two of the elements arbitrarily and discard the smaller one. Eventually there will be only one number in the array and that is the biggest one.

```typescript
// only applicable for 0 <= A, B <= 1000.
type GreaterThan<
  A extends number,
  B extends number,
  Acc extends unknown[] = []
> = A extends Acc['length']
  ? false
  : B extends Acc['length']
  ? true
  : GreaterThan<A, B, [...Acc, unknown]>;

type Maximum<T extends any[]> = T extends []
  ? never
  : T extends [
      infer First extends number,
      infer Second extends number,
      ...infer Rest
    ]
  ? Maximum<[GreaterThan<First, Second> extends true ? First : Second, ...Rest]>
  : T[0]; // only 1 element left in `T`.
```

Implementing `Minimum` will require the very same logic plus some modification:

```typescript
// only applicable for 0 <= A, B <= 1000.
type LessThan<
  A extends number,
  B extends number,
  Acc extends unknown[] = []
> = A extends Acc['length']
  ? true
  : B extends Acc['length']
  ? false
  : LessThan<A, B, [...Acc, unknown]>;

type Minimum<T extends any[]> = T extends []
  ? never
  : T extends [
      infer First extends number,
      infer Second extends number,
      ...infer Rest
    ]
  ? Minimum<[LessThan<First, Second> extends true ? First : Second, ...Rest]>
  : T[0]; // only 1 element left in `T`.
```

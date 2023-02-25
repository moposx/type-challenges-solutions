/*
  9384 - Maximum
  -------
  by ch3cknull (@ch3cknull) #hard #array

  ### Question

  ### Description
  Implements a type `Maximum`,  get array like type `T`, and return max value in `T`

  `0 <= T[number] < 1000`, so **nagative number not considered**.

  If `T` is a empty array `[]`, just reutrn `never`

  ```ts
  Maximum<[]> // never
  Maximum<[0, 2, 1]> // 2
  Maximum<[1, 20, 200, 150]> // 200
  ```
  ### Advanced
  Can you implement type `Minimum` inspired by `Maximum`?

  > View on GitHub: https://tsch.js.org/9384
*/

/* _____________ Your Code Here _____________ */

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

// extra challenge

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

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
  Expect<Equal<Minimum<[]>, never>>,
  Expect<Equal<Minimum<[0, 2, 1]>, 0>>,
  Expect<Equal<Minimum<[1, 20, 200, 150]>, 1>>
];

type result = Minimum<[1, 20, 200, 150]>;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9384/answer
  > View solutions: https://tsch.js.org/9384/solutions
  > More Challenges: https://tsch.js.org
*/

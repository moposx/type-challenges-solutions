# 4182 - Fibonacci Sequence

Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding Fibonacci number.

The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

Fibonacci sequence is not hard in programming, but with TypeScript's typing system direct increment or decrement is not possible. To do so we need to utilize array that has a length property and can be manipulated. That is, for increment operation we add a new element to an array, and remove an element from that array if we want decrement. To calculate the nth number in a Fibonacci sequence, we'd better use recursion. To determine when the recursion should be terminated, we need a tracker variable. Also, the recursive procedure is adding the last two numbers in the Fibonacci sequence.

```typescript
type Fibonacci<
  T extends number,         // nth
  N extends 1[] = [1],      // times of calculating `(fib(n - 1) + fib(n - 2)`
  Sub1 extends 1[] = [],    // fib(n - 2), initially 0
  Sub2 extends 1[] = [1],   // fib(n - 1), initially 1
> = T extends N['length']
  ? [...Sub1, ...Sub2]['length'] // index reaches n
  // recursively calculating `(fib(n - 1) + fib(n - 2)`
  : Fibonacci<T, [...N, 1], [...Sub1, ...Sub2], Sub1>;
```

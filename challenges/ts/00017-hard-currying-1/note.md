# 17 - Curring 1

Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

The function passed to `Currying` may have multiple arguments, you need to correctly type it.

In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.


We define the type `Curry<T>` which receives a function. We use `Parameters` to get its parameters as an array and see if it matches the pattern: `[infer First, infer Second, ...infer Rest]`. If so, we return a new function taking the first parameters from the array and returns the recursive calling of `Curry` on the rest parameters. When the array pattern is not matched, we return the `T` itself.

For `Currying` function, if no more than 1 arguments are provided, we just take it as-is; if multiple arguments are passed in, we need to do currying by calling `Curry<T>`.

```typescript
type Curry<
  T extends (...args: any[]) => any
> = Parameters<T> extends [infer First, infer Second, ...infer Rest]
  ? (arg: First) => Curry<(...args: [Second, ...Rest]) => ReturnType<T>>
  : T;


declare function Currying<
  Fn extends Function
>(fn: Fn): Fn extends (...args: any[]) => any
  ? Curry<Fn>
  : Fn;
```

# 4518 - Fill

`Fill`, a common JavaScript function, now let us implement it with types. `Fill<T, N, Start?, End?>`, as you can see, `Fill` accepts four types of parameters, of which `T` and `N` are **required** parameters, and `Start` and `End` are optional parameters. The requirements for these parameters are: `T` must be a tuple, `N` can be any type of value, `Start` and `End` must be integers greater than or equal to 0.

Based on [Solution from snakeUni](https://github.com/type-challenges/type-challenges/issues/22937):

```typescript
type Fill<
  T extends any[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Filled extends any[] = [],
  Limit extends number = Start
> = Start extends End
  ? T
  : Filled["length"] extends Limit
    ? Fill<T, N, Start, End, Filled, Limit extends Start ? End : Start>
    : T extends [infer First, ...infer Rest]
      ? Fill<Rest, N, Start, End, [...Filled, Limit extends End ? N : First], Limit>
      : Filled;
```

First we check if the pair of the given`Start` and `End` is equal, and in that case we do not fill anything in to the array but return it as-was. Then we will set two auxiliary parameters to use in recursion: `Filled` which is an empty array initially stores the result of every filling recursion, and `Limit` set the terminating point of the process, which by default is equal to `Start`.

With those we start to fill elements into the array: first we check if the result array has reached the limit length, which means we must update the limit so more elements can be filled in. If `Limit` is equal to `Start` (by default it is), update it to be the value of `End`, we rarely need to do this updating. If the limit is not reached, depending on whether we have reached the end of the given filling range, we take the first element (in the midway to the end), or a `N` (on reached the end), then add it into the `Filled` array. Togehter with the result array, we pass the rest part of the `T` into next recursion. When `T` is exhausted, we return the `Filled` array.

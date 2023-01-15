# 20 - Promise.All()

Type the function `PromiseAll` that accepts an array of PromiseLike objects, the returning value should be `Promise<T>` where `T` is the resolved result array.

In JS, `Promise.all()` receives an **iterable** of promises and will eventually return a single promise whose status is based on the collective result of the passed-in promises.

A simple, tentative solution will be like:

```typescript
declare function PromiseAll<T>(values: [...T]): Promise<T>
```

Note though T shoule be constrained to be of `PromiseLike` type, according to the test cases and examples we get to know that it is actually of type `any`. For example, a number will be finally resolved as well.

We also encounter some errors complaining that:

> Argument of type 'readonly [1, 2, 3]' is not assignable to parameter of type '[1, 2, 3]'.
> The type 'readonly [1, 2, 3]' is 'readonly' and cannot be assigned to the mutable type '[1, 2, 3]'.

To handle these errors, we specify that the parameters of `PromiseAll` will be readonly.

Finally, for the retured promise object, it shuold include an array of resolved values. Therefore we should assign a object type containing every result of the resolved promises. For every promise, use `Awaited` to obtain the result:

```typescript
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [P in keyof T]: Awaited<T[P]>;
}>
```

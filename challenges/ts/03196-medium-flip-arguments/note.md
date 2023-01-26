# 03196 - Flip Arguments

Implement the type version of lodash's `_.flip`.

Type `FlipArguments<T>` requires function type `T` and returns a new function type which has the same return type of `T` but **reversed** parameters.

To flip the arguments we need to first get their names and types. Also, since the return type should be retained, we need get the original function's return type. All of this can be done using TypeScript's inference feature.

By reversing the arguments' types, we got them flipped.

```typescript
type Reverse<T extends any[]> = T extends [...infer FirstN, infer Last]
  ? [Last, ...Reverse<FirstN>]
  : T;

type FlipArguments<
  T extends (...args: any) => any
> = T extends (...args: infer Args) => infer ReturnType
  ? (...args: Reverse<Args>) => ReturnType
  : never;
```

# 191 - Append Argument

Similar to [3312 - Parameters](../03312-easy-parameters/note.md), let TypeScript infer the actual parameters of the given function `Fn`, then use rest elements to push the additional parameter `A` to the parameter array:

```typescript
type AppendArgument<
  Fn extends (...args: any[]) => any,
  A
> = Fn extends (...args: infer P) => any
  ? (...args: [...P, A]) => any
  : never;
```

Note that we're not passing the tests because of unmatched return types. To solve this, we also need to infer the return type of the given `Fn`:

```typescript
type AppendArgument<
  Fn extends (...args: any[]) => any,
  A
> = Fn extends (...args: infer P) => infer R
  ? (...args: [...P, A]) => R
  : never;
```

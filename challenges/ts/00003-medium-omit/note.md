# 3 - Omit

`Omit<Type, Keys>` is available since TypeScript 3.5.

It constructs a type by picking all properties from `Type` and then removing `Keys` (string literal or union of string literals).

That is, in `Omit<T, K>`, `K` must be an exisiting property key in `T`. Therefore, `K` should be constrained to `K extends keyof T`.

`Omit<T, K>`'s behavior reminds us of a combined effect of both `Pick<T, K>` and `Exclude<T, U>`. That is, when picking properties from `T`, we exclude keys that should be omitted. The solution to this problem, without reinventing the wheel will be:

```typescript
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

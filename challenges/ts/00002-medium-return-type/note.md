# 2 - Return Type

`ReturnType<T>` is available since TypeScript 2.8.

It will:

> Constructs a type consisting of the return type of function Type.

Consider what a function will return:

- a) something undetermined is returned
- b) nothing is returned

Clearly we need again to use the conditional types.

For b), the type is `never` apparently. However, for a), we cannot determine the actual return type of a certain function. Fortunately, we have the `infer` keyword to use in conditional types.

Let the return type of a certain function of type `T` be `R`, we can write a solution like:

```typescript
type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;
```

In which `T` is constrained to be a function that takes unfixed number of arguments of type `any`, whose return type is either inferred from the function itself or just `never` for returning nothing.

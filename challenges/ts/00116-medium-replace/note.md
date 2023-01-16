# 116 - Replace

Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`.

We do not need to manually implement a string matching algorithm. TypeScript's inference inside a template literal is powerful enough to do that:

```typescript
type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Foo}${From}${infer Bar}`
  ? `${Foo}${To}${Bar}`
  : S;
```

If the target string `S` contains the `From` substring, replace it with `To`. Note that this only happens for the first match.

Wait, we're not passing all the tests. That is because we ignored the case in which `From` is empty. In that case, we just return the string as-is.

```typescript
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer Foo}${From}${infer Bar}`
    ? `${Foo}${To}${Bar}`
    : S;
```

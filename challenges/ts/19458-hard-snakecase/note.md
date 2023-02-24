# 19458 - snake_case

Create a `SnakeCase<T>` generic that turns a string formatted in `camelCase` into a string formatted in `snake_case`.

How do we convert a string formatted in camel case into the one formatted in snake case? Well, we find that in such a string, the letter in upper case serves as a delimiter which helps us to insert underscores in right place - right before the letter.

We do such a check by comparing a letter and its variant in upper case. If they're identical, we then insert an underscore before it, which is followed by the letter's lower case variant.

This will be a recursive procedure, and to keep the intermediate results, we add an optional paramter `Ret` which is constrained to be of type `string` and is initialized as an empty string.

```typescript
type SnakeCase<
  T extends string,
  Ret extends string = ''
> = T extends `${infer First}${infer Rest}`
  ? SnakeCase<
      Rest,
      `${Ret}${First extends Uppercase<First> ? '_' : ''}${Lowercase<First>}`
    >
  : Ret;
```

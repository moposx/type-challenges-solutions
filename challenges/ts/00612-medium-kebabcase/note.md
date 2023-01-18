# 612 - Kebab-Case

Replace the camelCase or PascalCase string with kebab-case.
i.e. `FooBarBaz` or `fooBarBaz` -> `foo-bar-baz`.

The key to this problem is to split parts from the given string, get them uncapitalized, then join them with a hyphen.

By observing the patterns of camelCase and PascalCase, we found that the letter in uppercase is actually also a delimiter. When we find a substring that is not euqal to its uncapitalized from (not lowercase form), it means we have got a part of the given string which can be appended to the final kebab-case string, and the other part which has to be uncapitalized, and then appended to the kebab-case string after a hyphen. By doing this recursively until the string is exhausted, we get the converted string in kebab-case:

```typescript
type KebabCase<
  S extends string
> = S extends `${infer First}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Uncapitalize<First>}${KebabCase<Rest>}`
    : `${Uncapitalize<First>}-${KebabCase<Rest>}`
  : S;
```

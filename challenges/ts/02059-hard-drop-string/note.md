# 2095 - Drop String

Implement `DropString<S, R>` that drops the specified chars from a string.

This is similar to [Drop Char](../02070-medium-drop-char/note.md), only the characters to be dropped can be multiple. If `R` is either undefined or is a single character, then `DropString` is essentially the same as `DropChar`. This enlightens us that we can turn `R` from a string of multiple characters into a series of single characters, which can be achieved by converting the string into a union:

From [String-To-Union](../00531-medium-string-to-union/note.md):

```typescript
type StringToUnion<
  T extends string,
  U = never
> = T extends `${infer First}${infer Rest}`
  ? StringToUnion<Rest, U | First>
  : U;
```

Then it is easy to check if we need to drop that character: if the current character from `S` is one of the characters in `R`, we just drop it, else it is kept and we recusively do the check:

```typescript
type DropString<
  S extends string,
  R extends string
> = S extends `${infer First}${infer Rest}`
  ? First extends StringToUnion<R>
    ? `${DropString<Rest, R>}`
    : `${First}${DropString<Rest, R>}`
  : S;
```

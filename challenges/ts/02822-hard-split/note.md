# 2822 - Split

The well known `split()` method splits a string into an array of substrings by looking for a separator, and returns the new array. The goal of this challenge is to split a string, by using a separator, but in the type system!

We first analyze the test cases:

- If `S` is not empty, and `SEP` is not present in `S`, return `S`.
- If `S` is empty and `SEP` is empty, return `[]`.
- If `S` is empty and `SEP` is not empty, return `['']`.
- If `S` is not a string literal but the `string` type, return `string[]` ignoring `SEP`.

Normally we will use template literal to split the string: `${infer First}${SEP}${infer Rest}`.

The whole logic:

```typescript
type Split<
  S extends string,
  SEP extends string,
  Ret extends string[] = []
> = string extends S
  ? string[]           // the `string` type is passed in
  : S extends `${infer First}${SEP}${infer Rest}`
    ? Split<Rest, SEP, [...Ret, First]>
    : S extends ''
      ? SEP extends ''
        ? Ret          // both `S` and `SEP` are empty, return the result
        : ['']         // target string is empty, return a tuple of a single empty string
      : [...Ret, S];   // target is not empty but the given separator is not present in it
                       // return the result plus the string itself.
```

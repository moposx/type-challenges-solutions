# 9286 - First Unique Char Index

Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`. (Inspired by leetcode 387)

We shold keep a record of previously seen characters (initially nothing), and check if the current character is already seen. If so, we continue to check the following characters. Otherwise, we've found the first unque character. To get its length in TypeScript's typing system, we need an auxiliary array.

```typescript
type FirstUniqueCharIndex<
  T extends string,
  Index extends unknown[] = [], // track indices
  Prev extends string = ''      // keep a record of seen characters
> = T extends `${infer First}${infer Rest}`
  // whether current character `First` is already seen
  ? `${Prev}${Rest}` extends `${infer _Head}${First}${infer _Tail}`
    // continue to check next character, adding the current character into the seen ones
    ? FirstUniqueCharIndex<Rest, [...Index, unknown], `${Prev}${First}`>
    // found the first unique character, return its index
    : Index['length']
  : -1; // the given string is empty, so finding a unique character is not possible
```

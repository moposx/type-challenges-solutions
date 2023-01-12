# 298 - Length of String

Compute the length of a **string literal**, which behaves like `String#length`.

While JavaScript does not provide a character type, a string literal does have an equivalent form of an array of letters (or 漢字、仮名, etc). To obtain the length of a certain string literal, one feasible way is to scatter the string literal into a charater array, and the length can be retieved easily.

TypeScript supports type inference in template literals, which shows us a path to generate an array on a string literal. For this problem, we split the string literal into two parts with the first letter and the rest characters as a substring. Then, we can recusively apply `LengthOfString` on that substring while continuing to collect letters. When the string literal passed to `LengthOfString`, the length of the letters array is the very length of the original string literal.

```typescript
type LengthOfString<
  S extends string,
  CharArr extends string[] = []
> = S extends `${infer FirstLetter}${infer restLetters}`
  ? LengthOfString<restLetters, [FirstLetter, ...CharArr]>
  : CharArr['length'];
```

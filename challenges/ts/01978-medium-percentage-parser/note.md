# 1978 Percentage Parser

Implement `PercentageParser`. According to the `/^(\+|\-)?(\d*)?(\%)?$/` regularity to match T and get three matches.

The structure should be: `[plus or minus, number, unit]` If it is not captured, the default is an empty string.

Let's scan the string from the first character.

For the simplest case, i.e. to scan an empty string, return `['', '', '']`:

```typescript
type PercentageParser<A extends string> = A extends `${infer First}${infer Rest}`
  ? TODO
  : ['', '', '']; // return empty tuple for empty input
```

The first character might be the sign (`'+' | '-'`). The following part may be several digits with a percentage symbol or not.

```typescript
type PercentageParser<A extends string> = A extends `${infer First}${infer Rest}`
  ? First extends '+' | '-' // check if a sign appears
    // There's the sign, then find digits and percentage symbol.
    // If that's not the case, return the remaining part of the string plus an
    // empty string
    ? [First, ...(Rest extends `${infer Digits}%` ? [Digits, '%'] : [Rest, ''])]

    // No sign here, also try to find some digits and a possible percentage
    // symbol, returning the remaining part as a whole with an empty string for
    // the percentage slot in the tuple on failing to match that pattern.
    : ['', ...(A extends `${infer Digits}%` ? [Digits, '%'] : [A, ''])]
  : ['', '', '']; // return empty tuple for empty input
```

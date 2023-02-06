# 112 - Capitalize Words

Implement `CapitalizeWords<T>` which converts the first letter of each word of a string to uppercase and leaves the rest as-is.

The hard part of the problem is how to delimit words inside the given string. There's spaces, commas and even pound signs, hyphens, asterisks, underscores and so on. Therefore, we need a filter function to disinguish letters and non-letters from the characters:

```typescript
// given a letter, the type will be `true` and `false` for other given values.
type IsNonAlphabetic<
  T extends string
> = Uppercase<T> extends Lowercase<T> ? true : false;
```

Also, we need an auxiliary storage `Ret extends string = ''` for storing the result string of every call of `CapitalizeWords`, which is initially an empty string. We check if the given string's first character is a letter or not. If it is not a letter, we just append it to `Ret` and make it as a whole capitalized, plus the result of capitalizing the rest part of the given string which will be the final result. If it is a string, we just store it into `Ret`, and call `CapitalizeWords` with the rest part of the string. If the string is exhausted, we return a capitalized version of the `Ret`.

```typescript
type IsNonAlphabetic<
  T extends string
> = Uppercase<T> extends Lowercase<T> ? true : false;

type CapitalizeWords<
  S extends string,
  Ret extends string = ''
> = S extends `${infer First}${infer Rest}`
      ? IsNonAlphabetic<First> extends true
        ? `${Capitalize<`${Ret}${First}`>}${CapitalizeWords<Rest>}`
        : CapitalizeWords<Rest, `${Ret}${First}`>
      : Capitalize<Ret>
```

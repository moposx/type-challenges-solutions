# 106 - Trim Left

Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.

This requires using TypeScript's template literals. By letting typescript infer the very first of a string, if a whitespace, it is ignored and the rest substring will be passed to `TrimLeft<T>` until the first letter is not a whitespace, then just return that substring:

```typescript
type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer U}`
  ? TrimLeft<U>
  : S;
```

## A Pedantic Note

In ECMA-262, the standard that defines JavaScript, `U+0009`, `U+000B`, `U+000C`, `U+FEFF` and any code point in general category "Space_Separator" are considered to be whitespace characters (see <https://tc39.es/ecma262/#sec-white-space>). The `\n` (`U+000A`) is not listed there, which is different from other languages like Java (see [`Character.isWhitespace()`](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Character.html#isWhitespace(char))).

So here's a pedantic solution:

```typescript
type EcmaWhitespaces = '\u0009' | '\u000B' | '\u000C' | '\uFEFF' | '\u0020' | '\u00A0' | '\u1680'
  | '\u2000' | '\u2001'| '\u2002'| '\u2003'| '\u2004'| '\u2005'| '\u2006'| '\u2007'| '\u2008'
  | '\u2009' | '\u200A' | '\u202F' | '\u205F' | '\u3000';
type NewLineLiteral = '\u000A';
type MyWhitespaces = EcmaWhitespaces | NewLineLiteral;

type TrimLeft<S extends string> = S extends `${MyWhitespaces}${infer restSubstring}`
  ? TrimLeft<restSubstring>
  : S;
```

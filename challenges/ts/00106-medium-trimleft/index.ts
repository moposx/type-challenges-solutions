/*
  106 - Trim Left
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.

  For example

  ```ts
  type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
  ```

  > View on GitHub: https://tsch.js.org/106
*/

/* _____________ Your Code Here _____________ */
import { Equal } from "@type-challenges/utils"

// https://tc39.es/ecma262/#sec-white-space
type EcmaWhitespaces = '\u0009' | '\u000B' | '\u000C' | '\uFEFF' | '\u0020' | '\u00A0' | '\u1680'
  | '\u2000' | '\u2001'| '\u2002'| '\u2003'| '\u2004'| '\u2005'| '\u2006'| '\u2007'| '\u2008'
  | '\u2009' | '\u200A' | '\u202F' | '\u205F' | '\u3000';
// yes, ECMA-262 exclude the character from ones that are considered whitespaces.
type NewLineLiteral = '\u000A';

type MyWhitespaces = EcmaWhitespaces | NewLineLiteral;

type TrimLeft<S extends string> = S extends `${MyWhitespaces}${infer restSubstring}`
  ? TrimLeft<restSubstring>
  : S;

/* _____________ Test Cases _____________ */
import type { Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/106/answer
  > View solutions: https://tsch.js.org/106/solutions
  > More Challenges: https://tsch.js.org
*/

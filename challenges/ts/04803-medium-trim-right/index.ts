/*
  4803 - Trim Right
  -------
  by Yugang Cao (@Talljack) #medium #template-literal

  ### Question

  Implement `TrimRight<T>` which takes an exact string type and returns a new string with the whitespace ending removed.

  For example:

  ```ts
  type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
  ```

  > View on GitHub: https://tsch.js.org/4803
*/

/* _____________ Your Code Here _____________ */
// https://tc39.es/ecma262/#sec-white-space
type EcmaWhitespaces = '\u0009' | '\u000B' | '\u000C' | '\uFEFF' | '\u0020' | '\u00A0' | '\u1680'
  | '\u2000' | '\u2001'| '\u2002'| '\u2003'| '\u2004'| '\u2005'| '\u2006'| '\u2007'| '\u2008'
  | '\u2009' | '\u200A' | '\u202F' | '\u205F' | '\u3000';
// yes, ECMA-262 exclude the character from ones that are considered whitespaces.
type NewLineLiteral = '\u000A';
type MyWhitespaces = EcmaWhitespaces | NewLineLiteral;

type TrimRight<S extends string> = S extends `${infer Head}${MyWhitespaces}`
  ? TrimRight<Head>
  : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4803/answer
  > View solutions: https://tsch.js.org/4803/solutions
  > More Challenges: https://tsch.js.org
*/

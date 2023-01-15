/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.

  For example

  ```ts
  type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```

  > View on GitHub: https://tsch.js.org/108
*/

/* _____________ Your Code Here _____________ */
type EcmaWhitespaces = '\u0009' | '\u000B' | '\u000C' | '\uFEFF' | '\u0020' | '\u00A0' | '\u1680'
  | '\u2000' | '\u2001'| '\u2002'| '\u2003'| '\u2004'| '\u2005'| '\u2006'| '\u2007'| '\u2008'
  | '\u2009' | '\u200A' | '\u202F' | '\u205F' | '\u3000';
// yes, ECMA-262 exclude the character from ones that are considered whitespaces.
type NewLineLiteral = '\u000A';
type MyWhitespaces = EcmaWhitespaces | NewLineLiteral;
type TrimLeft<S extends string> = S extends `${MyWhitespaces}${infer restSubstring}`
  ? TrimLeft<restSubstring>
  : S;
type TrimRight<S extends string> = S extends `${infer Head}${MyWhitespaces}`
  ? TrimRight<Head>
  : S;

type Trim<S extends string> = TrimRight<TrimLeft<S>>;


// a short and easy to understand version:
type Trim2<S extends string> = S extends
  | `${MyWhitespaces}${infer Other}`
  | `${infer Other}${MyWhitespaces}`
  ? Trim2<Other>
  : S;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]
type cases2 = [
  Expect<Equal<Trim2<'str'>, 'str'>>,
  Expect<Equal<Trim2<' str'>, 'str'>>,
  Expect<Equal<Trim2<'     str'>, 'str'>>,
  Expect<Equal<Trim2<'str   '>, 'str'>>,
  Expect<Equal<Trim2<'     str     '>, 'str'>>,
  Expect<Equal<Trim2<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim2<''>, ''>>,
  Expect<Equal<Trim2<' \n\t '>, ''>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/108/answer
  > View solutions: https://tsch.js.org/108/solutions
  > More Challenges: https://tsch.js.org
*/

# 651 - Length of String 2

Implement a type `LengthOfString<S>` that calculates the length of the template string (as in 298 - Length of String):

```typescript
type T0 = LengthOfString<"foo"> // 3
```

The type must support strings several hundred characters long (the usual recursive calculation of the string length is limited by the depth of recursive function calls in TS, that is, it supports strings up to about 45 characters long).

Looking at the test cases we find that the longest string passed in has a length of 999. TypeScript does allow recursion to nest at the maximum level of 1000. That is, we can using an array to count the length of the string:

```typescript
type LengthOfString<
  S extends string,
  Acc extends unknown[] = []
> = S extends `${infer _}${infer Rest}`
  ? LengthOfString<Rest, [...Acc, unknown]>
  : Acc['length'];
```

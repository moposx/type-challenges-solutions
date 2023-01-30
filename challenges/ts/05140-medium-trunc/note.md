# 5140 - Trunc

Implement the type version of `Math.trunc`, which takes string or number and returns the integer part of a number by removing any fractional digits.

The parameter can be either a string or a number, which does not matter because they can be converted to string with ease. We define a pattern of template literal \``${infer Integral}.${infer Fractional}`\` and let TypeScript infer whether the given argument matches this pattern. If so, we return the integral part of that number, otherwise we return the number itself.

```typescript
type Trunc<
  T extends string | number
> = `${T}` extends `${infer Integral}.${infer Fractional}`
  ? Integral
  : `${T}`;
```

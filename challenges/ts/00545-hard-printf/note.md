# 545 - printf

Implement `Format<T extends string>` generic. The returned value should either be `string` or a (maybe netsed) function indicating types used for formatting as parameters.

For simplest case, i.e. we pass a plain string to `Format` and it just returns `string` type. For control characters we onlu need to consider `%s` and `%d`. We first create a type converting these control characters into the corresponding types:

```typescript
// N.B. only `%d` and `%s` are supported.
type ControlToType<
  C extends string = ''
> = C extends 's'
    ? string
    : C extends 'd'
      ? number
      : never;$$$$$$$$
```

Then we test if the given string matches the pattern `${infer _}%${infer Control}${infer Rest}`. If so, we capture the control character and try to convert it in to a certain type. Here we should check if the result is `never`, in which case we need to do recursive calls of `Format` on `Rest`. Otherwise, we return a function: `(ctrl: ControlToType<Control>) => Format<Rest>`. When the string does not match that pattern, we just also return `string`.

```typescript
type ControlToType<
  C extends string = ''
> = C extends 's'
    ? string
    : C extends 'd'
      ? number
      : never;

type Format<
  T extends string
> = T extends `${infer _}%${infer Control}${infer Rest}`
  ? [ControlToType<Control>] extends [never]
    ? Format<Rest>
    : (ctrl: ControlToType<Control>) => Format<Rest>
  : string;
```

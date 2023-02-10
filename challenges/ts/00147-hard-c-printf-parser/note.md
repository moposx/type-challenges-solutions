# 147 - C `printf` Parser

There is a function in C language: `printf`. This function allows us to print something with formatting. Like this:

```c
printf("The result is %d.", 42);
```

This challenge requires you to parse the input string and extract the format placeholders like `%d` and `%f`. For example, if the input string is `"The result is %d."`, the parsed result is a tuple `['dec']`.

Here is the mapping:

```typescript
type ControlsMap = {
  c: 'char',
  s: 'string',
  d: 'dec',
  o: 'oct',
  h: 'hex',
  f: 'float',
  p: 'pointer',
}
```

Not that hard huh? TypeScript's template literal is really powerful. We split the string into three parts:

- the characters before `%`, noted as `_` (we won't use that so ignore it).
- the next character right after `%`, noted as `Control`.
- the rest characters, noted as `Rest`.

If there's even no a `%` we simply return an empty tuple `[]`.

We then check if the control character is inside the mapping table, if so, we just push the mapped value to the returning tuple. Other wise, we just repeat the process on the `Rest`. This is a recursive process so we have to use an auxiliary storage to store the intermediate result, which we add after the `S` paramter called `Ret` and is initially an empty tuple.

```typescript
type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<
  S extends string,
  Ret extends any[] = []
> = S extends `${infer _}%${infer Control}${infer Rest}`
  ? Control extends keyof ControlsMap
    ? ParsePrintFormat<Rest, [...Ret, ControlsMap[Control]]>
    : ParsePrintFormat<Rest, Ret>
  : Ret;
```

# 119 - ReplaceAll

Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`.

Similar to `Replace`, we let TypeScript to match the substring then replace it if possible. To replace every occurence of `From` in the given string, we need to recursively apply `ReplaceAll` on the rest part of the substring of `S` until no more matches of `From` could be found. Finally, return the result.

```typescript
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer Foo}${From}${infer Bar}`
    ? `${Foo}${To}${ReplaceAll<Bar, From, To>}`
    : S;
```

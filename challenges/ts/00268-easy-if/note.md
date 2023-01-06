# 268 - If

Implement the util type `If<C, T, F>` which accepts condition `C`, a truthy value `T`, and a falsy value `F`. `C` is expected to be either true or false while `T` and `F` can be any type.

Examples:

```typescript
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

`If<C, T, F>` will check if `C` is either truthy or falsy. For a truthy `C`, the eventual type will be `T` and for a falsy `C` the eventual type will be `F`. This can be achieved by using conditional types:

```typescript
type If<C, T, F> = C extends true ? T : F;
```

Exactly what we want.

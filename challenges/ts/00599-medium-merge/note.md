# 599 - Merge

Merge two types into a new type. Keys of the *second* type *overrides* keys of the first type.

```typescript
type Merge<F, S> = any;
```

We need to map property keys from the union of `keyof F` and `keyof S`. But how do we let the property values from `S` overrides those ones from `F`? Well, if the property is in `S`, we will use its respective value; else, use the values from `F`:

```typescript
type Merge<F, S> = {
  [P in (keyof F | keyof S)]: P extends keyof S
    ? S[P]
    : P extends keyof F
      ? F[P]
      : never;
}
```

# 4260 - AllCombinations

Implement type `AllCombinations<S>` that return all combinations of strings which use characters from `S` at most once.

`S` should be a string and we need to get all the permutations of all of its letters.

For convenience, we first scatter `S` into a union type of its letters, then we generator permutatinos from these letters.

```typescript
// transform a string into a union
type StringToUnion<S extends string> = S extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : "";
```

```typescript
// get combinations from letters
type Combinations<
  S extends string,
  U = S
> = U extends S
  ? U | `${U}${Combinations<Exclude<S, U>>}`
  : never;
```

```typescript
// get all combinations from a string
type AllCombinations<S extends string> = Combinations<StringToUnion<S>>;
```

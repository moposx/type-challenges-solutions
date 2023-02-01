# 10969 - Integer

Please complete type `Integer<T>`, type `T` inherits from `number`, if T is an integer return it, otherwise return `never`.

We can easily write:

```typescript
type Integer<
  T extends number
> = `${T}` extends `${infer Head}.${infer Rest}`
  ? never
  : T;
```

But the following test failed:

```typescript
let x = 1;
Expect<Equal<Integer<typeof x>, never>>;
```

In that case, the passed-in argument is a `number` type. To solve this, add another judgement:

```typescript
type Integer<
  T extends number
> = number extends T
  ? never
  : `${T}` extends `${infer Head}.${infer Rest}`
    ? never
    : T;
```

`number extends T` will check if the actual type of `T` is `number`, which is not a digit, and in that case we return `never`.

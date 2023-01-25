# 3188 - Tuple to Nested Object

Given a tuple type `T` that only contains `string` type, and a type `U`, build an object recursively.

We start by building the most nested object. The advantage of doing so is that each time we enter into a new recurive procedure, we just extends the object that we built in the last procedure, much easier to implement.

To do so, we first extract the last element from `T` using rest elements. Then, while `T` is not exhausted, we call `TupleToNestedObject` recusively, passing the built object to it. Evetually we just return the object.

```typescript
type TupleToNestedObject<
  T extends string[],
  U,
  V = U
> = T extends [...infer FirstN, infer Last]
  ? TupleToNestedObject<FirstN, U, { [P in Last]: V }>
  : V;
```

But TypeScript is complaining:

```text
Type 'FirstN' does not satisfy the constraint 'string[]'.
  Type 'unknown[]' is not assignable to type 'string[]'.
    Type 'unknown' is not assignable to type 'string'.ts(2344)
```

We need to constrain the inferred elements:

```typescript
type TupleToNestedObject<
  T extends string[],
  U,
  V = U
> = T extends [...infer FirstN extends string[], infer Last extends string]
  ? TupleToNestedObject<FirstN, U, { [P in Last]: V }>
  : V;
```

Note that normally we should use `PropertyKey` over `string`. Just the problems has assured that `T` only contains `string` type.

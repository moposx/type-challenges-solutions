# 10 - Tuple to Union

Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.

i.e Create a new union type by combining all elements in a tuple.

Accessing an array using number index will return such type:

```typescript
type TupleToUnion<T extends any[]> = T[number];
```

Else, let typescript infer an array's content:

```typescript
type TupleToUnion<T extends any[]> = T extends Array<infer E> ? E : never;
```

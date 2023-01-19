# 1367 - Remove Index Signature

Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

Let's figure out how can we identify index signatures. Index signatures only allows `string`, `number` and `symbol` as its key (or `PropertyKey`, which is the union of these types). That's it!

Then, how do we distinguish between index signatures and regular properties (or type literals)? The answer is, that type literals are subtype of `string`, `number` and `symbol` but not *vice versa*:

```typescript
'foo' extends string // true
string extends 'foo' // false
```

Therefore, after mapping the properties, check every property key with `string (, number, symbol, in certain order but not as a union) extends key`. Once this evaluates to `true`, we know that we have seen an index signature.

```typescript
type RemoveIndexSignature<T> = {
  [P in keyof T as string extends P
    ? never
    : number extends P
    ? never
    : symbol extends P
    ? never
    : P]: T[P];
};
```

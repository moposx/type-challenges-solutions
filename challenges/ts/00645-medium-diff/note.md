# 645 - Diff

Get an Object that is the difference between `O` & `O1`

This can be done to extract from the combination of `O` and `O1`, then removing all shared properties of `O` and `O1`:

```typescript
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;
```

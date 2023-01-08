# 18 - Tuple Length

For given a tuple, you need create a generic `Length`, pick the length of the tuple.

`length` is a property available in an array object, so what we need to write for `Length<T>` is:

- constraining `T` to be a tuple type.
- retrieving the `length` property from `T`.

That will be:

```typescript
type Length<T extends readonly any[]> = T['length'];
```

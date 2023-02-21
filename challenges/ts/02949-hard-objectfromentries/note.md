# 2949 - Object.fromEntries

Implement the type version of `Object.fromEntries`.

From MDN:

> The `Object.fromEntries()` static method transforms a list of key-value pairs into an object.

It should accept an array of arrays of which it includes a key-value pair. To construct an object, the key will be of type `string` and the value can be `any`. Then we just use mapped types to transform them into an object:

```typescript
type ObjectFromEntries<
  T extends [string, any]
> = {
  [Entry in T as Entry[0]]: Entry[1];
};
```

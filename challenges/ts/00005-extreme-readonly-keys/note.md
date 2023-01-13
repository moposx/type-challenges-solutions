# 5 - Get Readonly Keys

Implement a generic `GetReadonlyKeys<T>` that returns a union of the **readonly** keys of an Object.

A tentative solution can be like:

```typescript
type IsReadOnlyKey<T, K> = {}:
type GetReadonlyKeys<T> = keyof {
  [P in keyof T /* that P must be a readonly key... */ ]: T[P];
}
```

With `IsReadonlyKey<K>` implemented, the problem is solved.

Consider that, if a property key is readonly in an object, then the result of picking that property should be identical to the result of manually create a readonly version of object containing that property. i.e.:

```typescript
type equality = Equal<Pick<T, K>, Readonly<T, K>>; // true.
```

Therefore, when mapping properties in the given object as types, we can cast the property into the result of the readonly check. If that result is assignable to `true`, we've gotten a readonly key.

The final solution is:

```typescript
type IsReadOnlyKey<T, K> = Equal<Pick<T, K>, Readonly<T, K>>;

// keyof will retrive all the property keys of an object, then produce a union type.
type GetReadonlyKeys<T> = keyof {
  [P in keyof T as IsReadOnlyKey<T, P> extends true ? T[P] : never]: T[P];
};
```

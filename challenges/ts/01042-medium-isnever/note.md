# 1042 - IsNever

Implement a type `IsNever`, which takes input type `T`. If the type of resolves to `never`, return `true`, otherwise `false`.

We can easily write:

```typescript
type IsNever<T> = T extends never ? true : false;
```

However we are not passing the tests: with `never` provided to `IsNever`, it still returns `false`!

That is, again, the distributivity of conditional types when they act on generics and are given to union types. What we've written means for every member in the union `T`, we check that if `never` is assignable to that memeber. Since `never` can represent an empty union, `T extends never` will evaluate to `never` and then falls to `false`;

Wrap `T` and `never` with square brackets to avoid the distributivity:

```typescript
type IsNever<T> = [T] extends [never] ? true : false;
```

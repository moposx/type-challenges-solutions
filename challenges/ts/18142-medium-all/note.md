# 18142 - All

Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches.

First we take out all elements from the list as a union type, and make use of the distributivity of conditional types acting on generics. If the given type is equal to them, we get the answer.

The equal type (from type challegnes utility) is:

```typescript
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;
```

The whole solution:

```typescript
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

type All<T extends any[], U> = IsEqual<T[number], U> extends true
  ? true
  : false;
```

# 62 - Type Lookup

Sometimes, you may want to lookup for a type in a union to by their attributes.

In this challenge, we would like to get the corresponding type by searching for the common type field in the union `Cat | Dog`. In other words, we will expect to get `Dog` for `LookUp<Dog | Cat, 'dog'>` and `Cat` for `LookUp<Dog | Cat, 'cat'>` in the following example.

```typescript
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
```

## Solution

First create a generic type `HasTypeAttribute<T>`, where T respresents the actual type:

```typescript
type HasTypeAttribute<T> = Record<'type', T>;
```

`LookUp<U, T>` will receive a single or a union of types that has a unspecified `type` field as `U`, and an actual type `T`. If `U` or a member of the union `U` has a type attribute with the same value as `T`, return `U`:

```typescript
type HasTypeAttribute<T> = Record<'type', T>;
type LookUp<
  U extends HasTypeAttribute<any>,
  T
> = U extends HasTypeAttribute<T> ? U : never;
```

Or, just simply (straightforward solution):

```typescript
type LookUp<U, T> = U extends { type: T } ? U : never;
```

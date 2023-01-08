# 43 - Exclude

Implement the built-in `Exclude<T, U>`. Exclude from T those types that are assignable to U.

To solve the problem, first we need to understand a characteristic of TypeScript's conditional types: __distributivity__. That is, for generic types, conditional types will apply the condition on each member of that type.

Take the example from TypeScript Handbook:

```typescript
type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]
```

If conditional types are not distributive by default, the eventual type should be `(string | number)[]`. In fact, to get this type we need to write:

```typescript
// disable the distributivity
type ToArray<Type> = [Type] extends [any] ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>; // (string | number)[]

```

This enlightens us that the challenge's solution can be:

```typescript
// in the case that T is assignable to U, return a `never` type.

// Otherwise, T is "scattered", and only memebers not assignable to U will be included into the final returned type.
type MyExclude<T, U> = T extends U ? never : T;
```

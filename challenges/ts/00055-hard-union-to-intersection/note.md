# 55 - Union to Intersection

Implement the advanced util type `UnionToIntersection<U>`.

To solve this problem we have to figure out two concepts: *covariance* and *contravariance*.

Some terminologies (explanation from Wikipedia):

> *Subtyping*: For instance, if the type `Cat` is a subtype of `Animal`, then an expression of type `Cat` should be substitutable wherever an expression of type `Animal` is used.
> *Variance* refers to how subtyping between more complex types relates to subtyping between their components. For example, how should a list of Cats relate to a list of Animals? Or how should a function that returns Cat relate to a function that returns Animal?
> *Covariance* is the quality of being different by being **more specific** (Cat is *covariant* to Animal) while **contravariance** is the quality of being different by being **more general** (Animal is *contravariant* to Cat).

Also, TypeScript has the trait of [bivariant function parameters](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-function-parameters-bivariant), i.e. function parameters are both covariant and contravariant.

So let's consider function types (examples from [drylint's solution](https://github.com/type-challenges/type-challenges/issues/22188)):

- Function parameter is covariant:

```typescript
type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type T10 = Foo<{ a: string; b: string }>; // string
type T11 = Foo<{ a: string; b: number }>; // string | number
```

- Function parameter is also contravariant:

```typescript
type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never;
type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }>; // string & number
```

Contravariance of function parameter can combine the types into an intersection, which is the very result we want.

```typescript
type UnionToIntersection<U> =
  (U extends U
    ? (arg: U) => void
    : never
  ) extends (arg: infer R) => void
    ? R
    : never;
```

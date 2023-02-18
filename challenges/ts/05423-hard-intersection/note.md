# 5423 - Intersection

Implement the type version of `Lodash.intersection` with a little difference. `Intersection` takes an Array `T` containing several arrays or any type element including the union type, and returns a new union containing all intersection elements.

From the examples we get that only arrays and union types are consider to be able to find an intersection. Since arrays can be converted to union with ease, let first consider how do we get the intersection of two union types:

```typescript
type IntersectionOfUnions<T, U> = T extends U ? T : never;
```

That's it. Only the intersection part of the two union type will be returned due to the distributivity of conditional types acting on generic union types.

Then, from the first element `First` in `T`, if it is an array, we just convert it to union type using `First[number]`, otherwise we directy pass it and a previously derived intersection of the elements, which can be stored as a parameter and should be initialized as `any` or `unknown`. When the array `T` is exhausted, we return the intersection:

```typescript
type IntersectionOfUnions<T, U> = T extends U ? T : never;

type Intersection<T extends any[], Ret = any> = T extends [
  infer First,
  ...infer Rest
]
  ? Intersection<
      Rest,
      IntersectionOfUnions<First extends any[] ? First[number] : First, Ret>
    >
  : Ret;
```

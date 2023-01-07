# 15 - Last

Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

In ES6+, when destructuring some elements from an array, we can use the `...` to collect the rest of elements which are not listed in the destructuring list. Here since what we want to extract from the array is the very last element, if we can use `...` to extract all of the array elements except the last one, the problem becomes ez. Well that is just one of the new features that TypeScript 4.0 brings!

It the changelog says:

> The first change is that spreads in tuple type syntax can now be generic.
> The second change is that rest elements can occur anywhere in a tuple - not just at the end!

With that in our hand, we can draw a solution:

```typescript
type Last<T extends any[]> = T extends [...any, infer LastElement] ? LastElement : never;
```

... where the elements of array of type T is grouped into two parts, with the second part including the last element in the array solely, whose type is inferred by TypeScript automatically. In the case that T is empty, the evetual type will be `never`.

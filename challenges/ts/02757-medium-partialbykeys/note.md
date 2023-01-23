# 2757 - Partial by Keys

Implement a generic `PartialByKeys<T, K>` which takes two type argument `T` and `K`.

`K` specify the set of properties of `T` that should set to be optional. When `K` is not provided, it should make all properties optional just like the normal `Partial<T>`.

To mark certain properties in an object as optional, append a question mark (`?`) after the property key. This also applies in mapped types. Given this, we can easily write:

```typescript
type PartialByKeys<
  T,
  K extends keyof T = keyof T
> = {
      [P in K]?: T[P] // optional keys
    } & {
      [P in keyof Omit<T, K>]: T[P]; // required keys
    }
```

Picking all the keys in `K` and mark them as optional, then intersecting them with other required keys will produce the final type.

However we're not passing the tests. In the following case:

```typescript
interface UserPartialName {
  name?: string
  age: number
  address: string
}

type result = PartialByKeys<User, 'name'>;
// type result = {
//     name?: string | undefined;
// } & {
//     age: number;
//     address: string;
// }

type equalityCheckResult = result extends UserPartialName ? true : false; // true
```

Yes, the result is actually what we want (They're not absolutely identical of course, for example the way of definition). However, `Equal<A, B>` works [in such a way](https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796) that TypeScript will not consider two theoretically identical types of which one is a normal type and the other is an intersection type. Instead, TypeScript will think that they are not related, hence return `false` in equality check. If we use `extends` or `Alike`, all the tests should be passed.

Therefore, we should make the produced type flattened (or "normalized"). `Flatten<T>` basically traverses the whole type and re-maps all the properties key and their values:

```typescript
type Flatten<T> = {
  [P in keyof T]: T[P];
};
```

And the complete solution is:

```typescript
type Flatten<T> = {
  [P in keyof T]: T[P];
};

type PartialByKeys<
  T,
  K extends keyof T = keyof T
> = Flatten<
  {
    [P in K]?: T[P] // optional keys
  } & {
    [P in keyof Omit<T, K>]: T[P]; // required keys
  }
>;
```

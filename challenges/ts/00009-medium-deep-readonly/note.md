# 9 - Deep Readonly

Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

This is just the `Readonly<T>` but a recursive version.

It's easy to write:

```typescript
type DeepReadonly<T> = {
  +readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
}
```

However we're not passing all the tests, since in JavaScript, all functions are also (though special) objects. To cover them:

```typescript
type DeepReadonly<T> = {
  +readonly [P in keyof T]: T[P] extends object
    ? T[P] extends (() => any)
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P];
}
```

# 14 - First

Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.

A tentative solution will be:

```typescript
type First<T extends any[]> = T[0];
```

However, we must handle the case in which the array T is empty, which requires that `never` should be returned according to the test cases. To achieve this, we need to make use of the conditinoal types.

```typescript
type First<T extends any[]> = T extends [] ? never : T[0];
```

Here `T extends []` means checking if T is an empty array. The eventual type will be determined by the vacantness of the array.

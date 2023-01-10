# 3312 - Parameters

Implement the built-in `Parameters` generic without using it.

`Parameters<Type>` constructs a tuple type from the types used in the parameters of a function type `Type`.

`Parameters<T>` will return an array that is possibly empty.

To constrain `T` to be of function type, we can write ```T extends (...args: any[]) => any```. The key to the solution to this problem is extract the `args` array from the generic constraints. We can actually change `any[]` to `infer P`, letting `P` available in the ternary expression.

Thus, the solution can be like:

```typescript
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any
  ? P // note that P will be be of type array and is possibly empty.
  : never; // this indicates the passed parameter to `MyParameters` is not of function type.
```

# 223 - IsAny

Sometimes it's useful to detect if you have a value with `any` type. This is especially helpful while working with third-party Typescript modules, which can export any values in the module API. It's also good to know about any when you're suppressing `implicitAny` checks.

So, let's write a utility type `IsAny<T>`, which takes input type `T`. If `T` is `any`, return `true`, otherwise, return `false`.

The fundamental knowledge of `any` type is:

- Stitching any other type with `any` will result in `any`.
- all types are subtypes of `any`.

We may write:

```typescript
type IsAny<T> = 'foo' extends T & 'bar' ? true : false;
```

and all tests will happily passed.

Caveats: do not write the same type in `... = TYPE extends T & TYPE ...` since the operand at right side may produce a value that is the same as `TYPE` but not `any` thus leading to a faulted check.

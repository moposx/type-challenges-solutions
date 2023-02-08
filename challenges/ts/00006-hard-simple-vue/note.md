# 6 - Simple Vue

Implement a simpiled version of a Vue-like typing support.

By providing a function name `SimpleVue` (similar to `Vue.extend` or `defineComponent`), it should properly infer the this type inside `computed` and `methods`.

In this challenge, we assume that `SimpleVue` take an Object with data, computed and methods fields as it's only argument,

`data` is a simple function that returns an object that exposes the context `this`, but you won't be accessible to other `computed` values or `methods`.

`computed` is an Object of functions that take the context as `this`, doing some calculation and returns the result. The computed results should be exposed to the context as the plain return values instead of functions.

`methods` is an Object of functions that take the context as this as well. Methods can access the fields exposed by data, computed as well as other methods. The different between computed is that methods exposed as functions as-is.

The type of SimpleVue's return value can be arbitrary.

From the descrition we get to know that `SimpleVue` receives an object inlcuding 3 required arguments: `data`, `computed` and `methods`, and returns `any`. We then draw the blueprint:

```typescript
declare function SimpleVue(options: {
  data: any,
  computed: any;
  methods: any
}): any;
```

Now we need to annotate the properties with appropriate types.

For `data`, it is a function and returns an object exposing the current `this` context but not allowing the access to its `computed` and `methods`. Looks like we can't simply write `data: () => any` because we have to consider the context of `this`.

`computed` works in the same context and returns the results of calculations instead of functions, which reminds us of the `ReturnType` utility type. That is, we walk through the object of `computed`, for function properties we get their return type.

`methods` still has the access to the current `this` context.

Now we find that we're actually seeking a means by which we can set the context of `SimpleVue`. TypeScript provides a `ThisType<T>` type which will set the type of `this` in certain obejct to `T`.

We mark `data` returns `D` type of values, and `methods` returns `M`. For computed values, we should create a new type to get the type of the return values of those functions in it. To mark the whole option object with `this`:

```typescript
type Computed<T> = T extends Record<string, (...args: any[]) => any>
  ? { [P in keyof T]: ReturnType<T[P]> }
  : never;

declare function SimpleVue<D, C, M>(
  options: {
    data: () => D,
    computed: C,
    methods: M,
  } & ThisType<D & M & Computed<C>>
): any
```


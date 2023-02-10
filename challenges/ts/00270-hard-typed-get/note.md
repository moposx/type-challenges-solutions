# 270 - Typed Get

The `get` function in `lodash` is a quite convenient helper for accessing nested values in JavaScript. However, when we come to TypeScript, using functions like this will make you lose the type information. With TS 4.1's upcoming Template Literal Types feature, properly typing `get` becomes possible. Can you implement it?

For the simplest case, i.e. we wanna access one of the properties in an object with the given key:

`get({ foo: 'foo', bar: 'bar'}, 'foo')`

In TypeScript we just need to write:

```typescript
type Get<T, K> = K extends keyof T ? T[K] : never;
```

However we are often faced with the complex case:

```javascript
get(
  {
    foo: 'foo',
    bar: 'bar',
    goo: {
      zoo: 'zoo'
      blah: {
        name: 'Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas'
      }
    }
  }, 'goo.blah.name');
```

When we want access the `name` property inside the most nested object by `'goo.blah.name'`, how do we keep the type information?

We can let typescript infer the given property name delimited by `.`, and check if every property is available in the object at the corresponding nesting level, and finally we'll get the value with type or `never`.

```typescript
type Get<T, K> = K extends keyof T
  ? T[K]
  : K extends `${infer Key}.${infer Value}`
    ? Key extends keyof T
      ? T[Key] extends object
        ? Get<T[Key], Value>
        : never
      : never
    : never;
```

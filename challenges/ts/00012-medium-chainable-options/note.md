# 12 - Chainable Options

Type an object or a class - whatever you like called `Chainable` to provide two function `option(key, value)` and `get()`. In option, you can extend the current config type by the given key and value. We should about to access the final result via `get`.

You can assume that key only accepts string and the value can be anything - just leave it as-is. Same key won't be passed twice.

Given the blueprint:

```typescript
type Chainable = {
  option(key: string, value: any): any;
  get(): any;
}
```

First, `Chainable` should receive an object, and `get()` will return an extends version of that object:

```typescript
type Chainable<T extends object = {}> = {
  option(key: string, value: any): any;
  get(): T; // returning an object
}
```

Next, `option()` should be generic to receive a key-value pair. For the parameters, since duplicated keys won't be passed twice, a property membership check should also be added:

```typescript
type Chainable<T extends object = {}> = {
  option<K extends string, V extends any>(
    key: K extends keyof T ? never : K,
    value: any): any;
  get(): T; // returning an object
}
```

Finally, we need to update the configuration storage object. Essentially, we're merging two objects:

- the storage object that was updated last time
- the temporary storage object that brings new configurations to the exisiting object

To reduce them into one object, we need to create an intersection type of the exisiting storage object with conflicting properties excluded and the temporary object including newly brought-in properties:

```typescript
type Chainable<T extends object = {}> = {
  option<K extends string, V extends any>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<
    Omit<T, K> & {
      [P in K]: V;
    }
  >;
  get(): T;
};
```

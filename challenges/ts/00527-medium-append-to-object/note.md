# 527 - Append to Object

Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

```typescript
type AppendToObject<I, K, V> = any;
```

We can use mapped types. when mapping the property keys to their respective values, how do we append the given key-value pair? Just let property keys be mapped from the union of `keyof I` and `K`, and assign the right values to them.

```typescript
type AppendToObject<I extends {}, K extends string, V> = {
  [P in (keyof I | K)]: P extends keyof I ? I[P] : V;
};
```

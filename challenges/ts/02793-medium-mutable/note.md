# 2793 - Mutable

Implement the generic `Mutable<T>` which makes all properties in `T` mutable (not readonly).

Since we're dealing with properties, we need to constrain T to be an object. To mark all of T's properties as not readonly, we remove the `readonly` modifier by using `-readonly`:

```typescript
type Mutable<T extends object> = {
  -readonly [P in keyof T]: T[P];
}
```

# 2828 - Class Public Keys

Implement the generic `ClassPublicKeys<T>` which returns all public keys of a class.

Since a instance of the given class `T` is essentially an object, `keyof` will return its keys as a union, which is essentially the public fields of the class.

```typescript
type ClassPublicKeys<T> = keyof T;
```

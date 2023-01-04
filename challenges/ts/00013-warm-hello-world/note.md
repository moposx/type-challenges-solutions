# 13 - Hello World

```typescript
// expected to be string
type HelloWorld = any

// you should make this work
type test = Expect<Equal<HelloWorld, string>>
```

This challenge is easy, since the type `HelloWorld` is expected to have the same type as `string`, which implies that making `HelloWorld` as an alias of type `string` will pass the test.

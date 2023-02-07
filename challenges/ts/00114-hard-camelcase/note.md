# 114 - CamelCase

Implement `CamelCase<T>` which converts `snake_case` string to `camelCase`.

Since strings in snake_case is delimited by `_` by default, we can easily extract every segment from them. The first segment will be in fully lower case when mapped to camelCase, and the following segments should be captalized. Before captializing them we should first changing them to be fully lowercased.

```typescript
// logic lives here
type CamelCase_<S extends string> = S extends `${infer Segment}_${infer Rest}`
  ? `${Segment}${CamelCase_<Capitalize<Lowercase<Rest>>>}`
  : S;

// we need to pre-process the given string
type CamelCase<S extends string> = CamelCase_<Lowercase<S>>;
```

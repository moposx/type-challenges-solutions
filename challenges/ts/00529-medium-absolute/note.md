# 529 - Absolute

Implement the `Absolute` type. A type that take `string`, `number` or `bigint`. The output should be a **positive number string**.

The input number, despite its form of `string`, `number` or `bigint`, will always be one of the negative numbers and non-negative numbers. For the former, we need to extract the part after the minus sign; for the latter, we just return the number as-is. All of this can be achieved using template literals:

```typescript
type Absolute<
  T extends number | string | bigint
> = `${T}` extends `-${infer U}` ? `${U}` : `${T}`;
```

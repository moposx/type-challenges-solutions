# 847 - String Join

Create a type-safe string `join` utility which can be used like so:

```typescript
const hyphenJoiner = join('-')
const result = hyphenJoiner('a', 'b', 'c'); // = 'a-b-c'
```

Or alternatively:

```typescript
join('#')('a', 'b', 'c') // = 'a#b#c'
```

When we pass an empty delimiter (i.e `''`) to join, we should concat the strings as they are, i.e:

```typescript
join('')('a', 'b', 'c') // = 'abc'
```

When only one item is passed, we should get back the original item (without any delimiter added):

```typescript
join('-')('a') // = 'a'
```

We need to create a utility type `Join<S, D>` to join some parts with the specified delimiter. The process is: we first take the first part from the given parts, then connect it to a delimiter and joined parts which is done using recursion. If there's no more than one part in `S`, the recursion hits the base case:

```typescript
type Join<
  S extends string[],
  D extends string,
  Ret extends string = ''  // save intermediate result
> = S extends [infer First extends string, ...infer Rest extends string[]]
  ? Rest extends []  // empty array
    ? `${Ret}${First}`
    : Join<Rest, D, `${Ret}${First}${D}`>
  : Ret;
```

Then we modify the signature of function `join` to make it possible to use a generic utility type:

```typescript
declare function join<D extends string>(delimiter: D): <
  S extends string[]
> (...parts: S) => Join<S, D>;
```

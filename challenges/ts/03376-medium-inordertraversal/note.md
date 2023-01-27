# 3376 - Inorder Traversal

Implement the type version of binary tree inorder traversal.

Binary Tree's in-order traversal first recursivly visit its left child, then the root node, the the right child.

```typescript
type InorderTraversal<
  T extends TreeNode | null
> = T extends TreeNode
  ? T["left"] extends TreeNode
    ? [...InorderTraversal<T["left"]>, T["val"]]
    : T["right"] extends TreeNode
      ? [T["val"], ...InorderTraversal<T["right"]>]
      : [T["val"]]
  : [];
```

Note we have to handle the case that `T` is not null firstly so we can access its properties without error. If the given tree is `null`, we just return an empty array as a result.

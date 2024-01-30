# Binary Search Tree Class in JavaScript

The following is a basic implementation of a Binary Search Tree (BST) class in JavaScript.

## Getting Started

```code
npm i @sarfi07/binaryTree
```

Basic example

```javascript
import BinaryTree from 'package_location';

// function that create an array with min and max variable
const makeArr = (min, max) => {
  let arr = [];

  min = Math.ceil(min);
  max = Math.floor(max);

  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }

  return arr;
};

// create an array
const newArr = makeArr(1, 100);

// create a Binary Search Tree with the Array
const bTree = new BinaryTree(newArr);
```

## BinarySearchTree Class

### Properties

- `root`: Represents the root node of the binary search tree.

### Methods

- `constructor()`: Initializes an empty binary search tree.
- `insert(value)`: Inserts a new node with the given value into the binary search tree.
- `delete(value)`: Deletes a node with the given value from the binary search tree.
- `find(value)`: Searches for a node with the given value in the binary search tree.
- `inOrder()`: Performs an in-order traversal of the binary search tree. And it gives us a sorted array from the BST.
- `preOrder` : Performs a preOrder traversal of the BST. Root, Left, Right order.
- `postOrder` : Traverse the BST in Left, Right, Root order.
- `prettyPrint` : Prints the BST from root. If some other node is provided then it will print BST from the provided node.
- `isBalanced` : Return true if the tree is balanced otherwise false.
- `reBalance` : Re-Balances the BST.

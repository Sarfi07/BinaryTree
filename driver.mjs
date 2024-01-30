import BinaryTree from "./binaryTree.mjs";


const makeArr = (min, max) => {
    let arr = [];

    min = Math.ceil(min);
    max = Math.floor(max);

    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min))
    }

    return arr;
}

const newArr = makeArr(1, 100)

const bTree = new BinaryTree(newArr);

    // check if balanced

// console.log(bTree.isBalanced());
// console.log(bTree.prettyPrint(bTree.root));


//      ubalance tree
// bTree.insert(101);
// bTree.insert(123)
// bTree.insert(102);
// bTree.insert(1552);
// bTree.insert(999);

// bTree.prettyPrint(bTree.root);
// console.log(bTree.isBalanced())

// bTree.reBalance();
// bTree.prettyPrint(bTree.root);


    // print tree in different traversal order
// console.log(bTree.levelOrder());
// console.log(bTree.inOrder());
// console.log(bTree.preOrder());
// console.log(bTree.postOrder());
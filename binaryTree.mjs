import Node from "./nodeFn.mjs";

export default class BinaryTree {
    root;

    constructor(arr) {
        this.arr = arr;
        this.root = this.buildTree(this.prepareArray(arr));
    }

    prepareArray(array) {
        array = array.sort((a, b)=> a - b);
        return [...new Set(array)]
    }


    buildTree(array, start = 0, end = array.length - 1) {

        // base case
        if (start > end) return null;

        let mid = Math.floor((start + end) / 2);

        let rootNode = new Node(array[mid]);
 
        rootNode.left = this.buildTree(array, start, mid - 1);
        rootNode.right = this.buildTree(array, mid+1, end);

        return rootNode;
    }

    // insert
    insert(val) {

        // used iterative approach because it has time complexity of O(log n) and space complexity of O(1). Which is better as compared to Recursive approach
        let current = this.root;
        let newNode = new Node(val);
        let parent;

        while (current !== null) {
            parent = current;

            if (val < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        if (val < parent.value) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
    }



    // delete
    delete(val, rootNode = this.root) {
        if (rootNode === null) {
            return rootNode;
        }


        if (val < rootNode.data) {
            rootNode.left = this.delete(val, rootNode.left)
        }
        else if (val > rootNode.data) {
            rootNode.right = this.delete(val, rootNode.right)
        }
        else {
            if (rootNode.left === null) return rootNode.right;
            else if (rootNode.right === null) {
                return rootNode.left;
            }

            console.log(rootNode.right)
            rootNode.data = minVal(rootNode.right);
            rootNode.right = this.delete(rootNode.data, rootNode.right);
            console.log(rootNode.right)
        }

        return rootNode;

        function minVal(rootNode) {
            let val = rootNode.data;

            while (rootNode.left !== null) {
                val = rootNode.left.data;
                rootNode = rootNode.left;
            }

            return val;
        }

    }

    // find
    find(val, rootNode = this.root) {
        if (rootNode.data === val || rootNode === null) {
            return rootNode;
        }

        if (val < rootNode.data) {
            return this.find(val, rootNode.left)
        }
        else {
            return this.find(val, rootNode.right)
        }
    }

    // Breadth-first Traversal: levelOrder
    levelOrder(callback) {
        let rootNode = this.root;
        if (rootNode === null) {
            return []
        }

        let result = [];
        let queue = [rootNode];

        while (queue.length) {
            let node = queue.shift();
            result.push(node.data);

            if (callback) callback(node);

            if (node.left) queue.push(node.left);

            if (node.right) queue.push(node.right)
        }

        return result;
    }

    // Depth-first Traversal
    // inOrder
    inOrder(rootNode = this.root, result = [], callback) {
        if (rootNode !== null) {
            this.inOrder(rootNode.left, result);

            result.push(rootNode.data);

            this.inOrder(rootNode.right, result);

            if (callback) callback(rootNode);
        }

        return result;
    }

    // preOrder
    preOrder(rootNode = this.root, result = [], callback) {
        if (rootNode !== null) {
            result.push(rootNode.data);

            this.preOrder(rootNode.left, result);

            this.preOrder(rootNode.right, result);

            if (callback) callback(rootNode);
        }

        return result;
    }

    // PostOrder
    postOrder(rootNode = this.root, result = [], callback) {
        if (rootNode !== null) {
            this.postOrder(rootNode.left, result);

            this.postOrder(rootNode.right, result);

            result.push(rootNode.data);

            if (callback) callback(rootNode);
        }

        return result;
    }

    // height
    height(rootNode = this.root) {
        if (rootNode === null || typeof rootNode === undefined) return 0;

        return Math.max(
            this.height(rootNode.left),
            this.height(rootNode.right)
        ) + 1;
    }


    // depth
    depth(targetNode, rootNode = this.root, currentDepth = 0) {
        if (rootNode === null) return -1;

        if (rootNode === targetNode) return currentDepth;

        return Math.max(
            this.depth(targetNode, rootNode.left, currentDepth + 1),
            this.depth(targetNode, rootNode.right, currentDepth + 1)
        )
    }

    // isblanced
    isBalanced(rootNode = this.root) {

        let lh = this.height(rootNode.left);
        let rh = this.height(rootNode.right);

        if ( Math.abs(lh - rh) > 1) return false;

        return true;
    }


    // rebalance
    reBalance() {
        try {
            let newArr = this.levelOrder()
            let newTree = this.buildTree(newArr);
            this.root = newTree;

            return true;
        }
        catch(err) {
            return false;
        }
    }

    // prints Tree
    prettyPrint (node=this.root, prefix = "", isLeft = true) {
        if (node === null) {
        return;
        }
        if (node.right !== null) {
        this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
        this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
  };

}



// Write a function to determine if all leaves of a binary tree are at the same level.

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function allLeavesAtSameLevel(node) {
  if (!node || (!node.left && !node.right)) return true;

  const depthsObserved = [];
  const initialDepth = 0;
  const nodeStack = [[node, initialDepth]];

  while (nodeStack.length > 0) {
    const [node, depth] = nodeStack.pop();
    const leftChild = node.left;
    const rightChild = node.right;
    const nodeIsLeaf = !leftChild && !rightChild;
    const currentDepth = depth + 1;

    if (nodeIsLeaf && !depthsObserved.includes(depth)) {
      depthsObserved.push(depth);
    }

    if (leftChild) {
      nodeStack.push([leftChild, currentDepth]);
    }

    if (rightChild) {
      nodeStack.push([rightChild, currentDepth]);
    }
  }

  return depthsObserved.length === 1;
}



var sameLevel = new Node(1, new Node(2,new Node(7)), new Node(3,new Node(4)));
var oneLeaf = new Node(1,undefined,new Node(2));
var diffLevel = new Node(1,new Node(2),sameLevel);

console.log(allLeavesAtSameLevel(sameLevel));
// true

// console.log(allLeavesAtSameLevel(oneLeaf));
// true

// console.log(allLeavesAtSameLevel(diffLevel));
// false

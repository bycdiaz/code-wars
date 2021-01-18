// Your task is simple enough. You will write a function which takes a tree as its input.
// Your function should output one string with the values of the nodes in an order
// corresponding to a breadth first search. This string also should be broken into
// levels corresponding to the depth of the nodes tree, and there should be a space
// between each value.

// The output would be a string and look something like this:

// 2 
// 7 5 
// 2 6 9 
// 5 11 4

class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children ? children : [];
  }
}

const B = new Node('B'); 
const C = new Node('C'); 
const A = new Node('A', [B, C])
const E = new Node('E', [A])
const F = new Node('F', [new Node('R'), new Node('J')])

const tree = new Node('D', [E, F, new Node('G')])

function treeDPrinter(tree){
  if (tree.children.length === 0) return `${tree.value}`;

  const nodeValues = [];
  const depth = 0;
  const nodeQueue = [[tree, depth]];

  while (nodeQueue.length) {
    const [node, depth] = nodeQueue.shift();
    const nodeValue = node.value;
    const nodeChildren = node.children;

    if (nodeValues[depth]) {
      nodeValues[depth] += ` ${nodeValue}`;
    } else {
      nodeValues.splice(depth, 0, `${nodeValue}`);
    }

    if (nodeChildren.length > 0) {
      nodeChildren.forEach(child => nodeQueue.push([child, depth + 1]));
    }
  }
  
  return nodeValues.join('\n');
}

console.log(treeDPrinter(A));
// 'A\nB C'

console.log(treeDPrinter(C));
// 'C'

console.log(treeDPrinter(tree));
// 'D\nE F G\nA R J\nB C'

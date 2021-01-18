// Implement a function to check if a binary tree is balanced.

function Node(value, left, right){
  this.value = value,
  this.left = left;
  this.right = right;
}

function isBalanced(root) {
  if (!root.left && !root.right) {
    return true;
  }

  const listOfDepths = [];
  const depth = 0;
  const nodeStack = [[root, depth]];

  while (nodeStack.length > 0) {
    const [ node, depth ] = nodeStack.pop();
    const nodeIsLeaf = !node.left && !node.right;

    if (nodeIsLeaf) {
      if (!listOfDepths.includes(depth)) {
        listOfDepths.push(depth);
      }

      const depthsVaryByTwoOrMore = (listOfDepths.length === 2 && Math.abs(listOfDepths[0] - listOfDepths[1]) > 1);

      if ((listOfDepths.length > 2) || depthsVaryByTwoOrMore) {
        return false;
      }
    }

    if (node.left) {
      nodeStack.push([node.left, depth + 1]);
    }

    if (node.right) {
      nodeStack.push([node.right, depth + 1]);
    }
  }
  
  return true;
}

const root = new Node("a", new Node("b", new Node("e", new Node("g")),  null), new Node("c", new Node("f"), null));

console.log(isBalanced(root));

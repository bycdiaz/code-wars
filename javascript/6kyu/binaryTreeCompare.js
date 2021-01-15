// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise

const aNode = { val: 1, left: null, right: null };
const bNode = { val: 1, left: null, right: null };
const cNode = { val: 2, left: null, right: null };
const dNode = {
  val: 0,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: null
};
const eNode = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null },
    right: null
  },
  right: null
};

function compare(a, b) {
  const ifBothNull = !a && !b;
  const ifOneNull = !a || !b;

  if (ifBothNull) {
    return true
  } else if (ifOneNull) {
    return false;
  }

  const treesStack = [[a, b]];

  while (treesStack.length) {
    const [nodeA, nodeB] = treesStack.pop();
  
    if (nodeA.val !== nodeB.val) return false;

    if (nodeA.left && nodeB.left) {
      treesStack.push([nodeA.left, nodeB.left]);
    } else if (nodeA.left || nodeB.left) {
      return false;
    }

    if (nodeA.right && nodeB.right) {
      treesStack.push([nodeA.right, nodeB.right]);
    } else if (nodeA.right || nodeB.right) {
      return false;
    }
  }

  return true;
}

console.log(compare(dNode, eNode));
// false

console.log(compare(aNode, bNode));
// true

console.log(compare(aNode, cNode));
// false


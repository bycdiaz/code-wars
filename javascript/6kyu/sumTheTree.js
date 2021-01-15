function sumTheTreeValues(root){
  if (!root.left && !root.right) return root.value;

  let nodesSum = 0;
  const nodesStack = [root];

  while (nodesStack.length) {
    const { value, left, right } = nodesStack.pop();

    nodesSum += value;

    if (left) nodesStack.push(left);

    if (right) nodesStack.push(right);
  }

  return nodesSum;
}

const sampleNode = {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}};

console.log(sumTheTreeValues(sampleNode));
// 13

const unbalancedNode = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};
console.log(sumTheTreeValues(unbalancedNode));
// 12

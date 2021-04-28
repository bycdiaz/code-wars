/*
Create a function add(n)/Add(n) which returns a function that
always adds n to any number

Note for Java: the return type and methods have not been
provided to make it a bit more challenging.

const addOne = add(1);
addOne(3); // 4

const addThree = add(3);
addThree(3); // 6
*/

function add(n) {
  return (m) => {
    return n + m;
  }
}

const addOne = add(1);
addOne(3); // 4

const addThree = add(3);
addThree(3); // 6
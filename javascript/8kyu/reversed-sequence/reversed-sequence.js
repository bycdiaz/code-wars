// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {
    let array = [];
    while (n > 0) {
        array.push(n);
        n--;
    }
    return array;
  };

console.log(reverseSeq(35));

  
// Normally we have firstname, middle and the last name but there
// may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

function initials(n){
  const nArray = n.split(' ');
  return nArray.map((name, index) => {
    const firstCapital = name[0].toUpperCase();
    if (index !== nArray.length - 1) {
      return name = `${firstCapital}`
    } else {
      return name = `${firstCapital}${name.slice(1)}`
    }
  }).join('.')
}

console.log(initials('code wars'));
// "C.Wars"

console.log(initials('Barack Hussain obama'));
// B.H.Obama 
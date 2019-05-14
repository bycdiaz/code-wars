// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  let noSpaces = x.replace(/\s/g,'');
  return noSpaces
}

console.log(noSpace("hee l   o"));

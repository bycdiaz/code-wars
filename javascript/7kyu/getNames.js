// The following code is not giving the expected results. Can you figure out what the issue is?

const data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

function getNames(data){
  return data.map(info => info.name)
}

console.log(getNames(data));
// should return ['Joe', 'Bill', 'Kate']
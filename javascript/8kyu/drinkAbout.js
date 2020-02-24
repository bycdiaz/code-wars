// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

//     Children under 14 old.
//     Teens under 18 old.
//     Young under 21 old.
//     Adults have 21 or more.

// Examples:

// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"

function peopleWithAgeDrink(age) {
  let drink = '';
  if (age >= 21) {
    drink = 'whisky';
  } else if (age >= 18) {
    drink = 'beer';
  } else if (age >= 14) {
    drink = 'coke';
  } else if (age < 14) {
    drink = 'toddy';
  }
  return `drink ${drink}`;
}

console.log(peopleWithAgeDrink(13));
// "drink toddy"

console.log(peopleWithAgeDrink(17));
// "drink coke"

console.log(peopleWithAgeDrink(18));
// "drink beer"

console.log(peopleWithAgeDrink(20));
// "drink beer"

console.log(peopleWithAgeDrink(30));
// "drink whisky"

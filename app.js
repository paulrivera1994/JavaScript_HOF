console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) {
  return function (plusNumber) {
    return number + plusNumber;
  };
}
const plus15 = plus(15);
console.log(plus15(10));

// Exercise 2
console.log("EXERCISE 2:\n==========\n");
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];
users.forEach((user) => console.log(user.name));

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
const mapUsers = users.map(({ name, score }) => console.log({ [name]: score }));

// Exercise 4
console.log("EXERCISE 4:\n==========\n");
const activeUsers = users.filter(({ name, isActive }) =>
  console.log({ [name]: isActive })
);

// Exercise 5
console.log("EXERCISE 5:\n==========\n");
const sortUsers = users.sort((user1, user2) => {
  return user1.score - user2.score;
});
console.log(sortUsers);

//Exercise 6
console.log("EXERCISE 6:\n==========\n");
const sum = users.reduce(
  (accumulator, currentValue) => accumulator + currentValue.score,
  0
);
console.log(sum);
const averageOfSum = sum / 4;
console.log(averageOfSum);

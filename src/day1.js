// ## JS Stuff

// 1. Objects and Functions
// 	- Everything is an object (kind of).
// 	- Hindley-Milner Type Notation
// 	- Functions
// 		- this, .length, .name, etc.
// 		- .call(), .apply(), .bind()
// 	- Variadic arguments, spread operator.
// 	- .bind() applications
// 	- Prototypes


// add :: Number -> Number -> Number
// sub :: Number -> Number -> Number

// function X() {
//   this.getX = function() {
//     console.log("here!");
//   }
// }

// X.prototype.getX = function() {
//   console.log("there");
// }

// const x = new X();
// x.getX()

class Student {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }

  getName() {
    return this.name;
  }

  test() {
    console.log(this);
  }
}

const john = new Student("John", "xyz");
const getName = john.getName.bind(john);

function performOperation(fn) {
  const data = {
    result: 100,
  };

  // fn.bind({
  //   data: data,
  // })();
  const args = [123, 2132];

  fn.call(data, ...args);
  
  // fn.apply({
  //   data: data,
  // }, args);
}

// function show(x, y) {
//   console.log("Show:", this.result);
//   console.log("x: ", x);
//   console.log("y: ", y);
// }

// performOperation(show);

// add :: Number -> Number -> Number
// function add(a, b, c) {
//   return a + b + c;
// }

// function add100(a, b) {
//   return add(a, b, 100);
// }

// // add10 :: Number
// const add10and20 = add.bind(null, 10, 20);

// console.log(add100(100, 200));


// Student.prototype.getName = function() {
//   return this.name;
// }

// const john = new Student("John", "xyz");

// const f = john.test.bind(john);
// f();

// const g = john.test.bind(123123);
// g();

// f();

// console.log(john.getName());

// function add(...args) {
//   let result = 0;

//   for(const x of args) {
//     result += x;
//   }

//   return result;
// }

// function showThings(...args) {
//   console.log(args);
// }

// showThings({ name: "John" }, 1, 2, 3);

// .bind
// .call,
// .apply

function add(a) {
  console.log(this.name);
  console.log(a.name);
}

const profile = {
  name: "a",
}
const profile2 = {
  name: "a2",
}

const f = add.bind(profile).call(undefined, profile2);

function User(name) {
  this.name = name;
}

function getUserName() {
  return this.name;
}

const johnDoe = new User("John Doe");
console.log(getUserName.call(johnDoe));

// function x(a) {
//   console.log(a.name);
// }

// x();

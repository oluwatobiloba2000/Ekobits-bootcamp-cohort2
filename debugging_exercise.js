// q. What does the throw keyword do?
// Ans. it is used to throw a customized error to the browser

// q. What does the finally keyword do?
// Ans. The finally keyword will always run after the try and catch block has ran

// q. What is the difference between a TypeError and ReferenceError?
// Ans. TypeError occurs when an operation cannot be performed
// while
// ReferenceError is when a non existence variable is referenced

// q. How do you create a snippet in the Chrome dev tools?
// Ans. open the dev tools , then go to source tab and create a new snippet

// q.In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
// Ans. when a javascript statement throws an error

// q. How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
// Ans.

let a = 1;
try {
  if (a) {
    throw 'customError : variable "a" should not have value';
  }
} catch (error) {
  console.log({ error });
}

// Explain what type of error will be thrown, why the error is occuring, and how to fix it:
// 1. person;
// error = Uncaught ReferenceError: person is not defined
// fix: change it to a variable, using the let keyword
// let person;

// 2.let data = {};
// data.displayInfo();
// error = Uncaught TypeError: data.displayInfo is not a function
// why?: it thorws an error because data object does not have a function as its key named displayInfo



// fix:
// let data = {
//     displayInfo() {
//       console.log("displayInfo function fired");
//     },
//   };
//   data.displayInfo();
  
  
//   3. 
// let data = {};
// data.displayInfo.foo = "bar";
  // error = Uncaught TypeError: Cannot set property 'foo' of undefined
//   why? : it because there is no key called displayInfo and foo in data object
  // fix: add foo to the object
  let data = {
      displayInfo : {
        foo: null
      }
  }

  data.displayInfo.foo = "bar";

// 4.
// function data(){
//     let thing = "foo";
// }
// data();
// thing;

// error = Uncaught ReferenceError: thing is not defined
// why? : thing variable is only in the data function scope and it is not accessible in the global scope
// fix: declear a global variable called thing

// let thing;
// function data(){
//   let thing = "foo";
// }
// data();
// thing;


// PART II
//Fix the broken code and explain what was wrong:

for(let i=0; i > 5; i++){
  console.log(i);
}

// Ans - The loop will never run because i is less that 5 when the loop runs first
// fix: 
for(let i=0; i < 5; i++){
  console.log(i);
}

// ---------------------------------------
// function addIfEven(num){
//   if(num % 2 = 0){
//       return num + 5;
//   }
//   return num;
// }

// Ans - the if block was assigning instead of comparison
// fix:

console.log((function addIfEven(num){
  if(num % 2 === 0){
      return num + 5;
  }
  return num;
})(20))

//  ----------
// function displayEvenNumbers(){
//   let numbers = [1,2,3,4,5,6,7,8];
//   let evenNumbers = [];
//   for(let i=0; i<numbers.length-1; i++;){
//       if(numbers % 2 = 0); {
//           evenNumbers.push(i);
//       }
//       return evenNumbers;
//   }
// }
//displayEvenNumbers(); // should return [2,4,6,8]

// HINT - eight things need to be changed here for this to work!
// Start by fixing the syntax errors and then run the function to see what your output is.

// fix:
function displayEvenNumbers(){
  let numbers = [1,2,3,4,5,6,7,8];
  let evenNumbers = [];
  for(let i=0; i<numbers.length; i++){
      if(numbers[i] % 2 === 0) {
          evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers())

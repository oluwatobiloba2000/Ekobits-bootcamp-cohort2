// countdown
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it.
//  Once the value is 0 it should log "DONE!" and stop.
countDown(2);
// 3
// 2
// 1
// "DONE!"

function countDown(num){
    let countDownNum = num - 1;

    const interval = setInterval(count, 1000)
    function count(){
        console.log({countDownNum})
        if(countDownNum === 1){
            console.log('DONE!');
            return clearInterval(interval)
        };
        countDownNum--;
    }
}



// ---------------------------------
// randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

function randomGame(){
    let count = 0;
    const interval = setInterval(generateRandomNum, 1000);
    
    function generateRandomNum(){
      let randomNum = Math.random();
      console.log({randomNum, count})
      if(randomNum > .75){
        clearInterval(interval)
        return count;
      }else{
        count = count + 1;
      }
    }
}

randomGame()

// ----------------------------------------------------
// isEven
// Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
console.log(isEven(2)); // true
console.log(isEven(3)); // false


function isEven(num){
    return (num % 2 === 0);
}


// ------------------------------------------------------
// isOdd
// Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not
console.log({isOdd: isOdd(3)}); // true
console.log({isOdd: isOdd(4)}); // false

function isOdd(num){
    return (num % 2 !== 0);
}

// -----------------------------------------------------------

// isPrime
// Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false
console.log({isprime: isPrime(8)}); // false
console.log({isprime: isPrime(17)}); // true

function isPrime(num){
    return (num > 1 && num % 2 !== 0)
}

// ------------------------------------------------------------
numberFact
// Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it
console.log('number is even',numberFact(59,isEven)); // false
console.log('number facts is odd',numberFact(59,isOdd)); // true
console.log('is prime number facts',numberFact(59,isPrime)); // true

function numberFact(num, callbackFn){
    return callbackFn(num);
}

// ------------------------------------------------------------------
// find
// Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.
console.log('find function',find([8,11,4,27], function(val){return val >= 10})); // 11
console.log(find([8,11,4,27], function(val){return val === 5})); // undefined

function find(arr, callbackFn){
    let array = arr;
    for (let i = 0; i < array.length; i++) {
        if(callbackFn(array[i])){
            return array[i];
        }
    }
}

// ----------------------------------------------------------
// findIndex
// Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.
// returns 1 (index of the first value greater than or equal to 10)
console.log('log from findindex function',findIndex([8,11,4,27], function(val){return val >= 10}));

console.log('Log from findindex function' ,findIndex([8,11,4,27], function(val){return val === 7})); // undefined

function findIndex(arr, callbackFn){
    let array = arr;
    for (let i = 0; i < array.length; i++) {
        if(callbackFn(array[i])){
            return i;
        }
    }
}

// ----------------------------------------------------

console.log('special multiply function',specialMultiply(3,4)); // 12
console.log('special multiply function',specialMultiply(3)(4)); // 12
console.log('special multiply function',specialMultiply(3)); // returns a function 

function specialMultiply(num1, num2){
    let number1 = num1;
    let number2 = num2;
    if(!num2){
        return function(num2){
            return number1 * num2;
        }
    }else{
        return number1 * number2;
    }
}
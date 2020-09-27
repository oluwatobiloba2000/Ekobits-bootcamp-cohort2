
function difference(firstnum, lastnum){
    return firstnum - lastnum;
}

console.log('difference', difference(2, 10))

function product(firstnum, lastnum){
    return firstnum * lastnum
}

function printDay(daysNum){
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    if (daysNum >= 0 && daysNum <= 7){
        return days[daysNum - 1];
    }
}

console.log('print day', printDay(10))

// multiple letter count function
function multipleLetterCount(str){
    let accObj = {}
    for(let letter of str){
        if(!!accObj[letter]){
            accObj[letter] = accObj[letter] + 1;
        }else{
            accObj[letter] = 1;
        }

    }
    return accObj;
}

console.log(multipleLetterCount("hello12222222222"))

function singleLetterCount(str, singleLetter){
   let accObj = {};
   let string = str.toLowerCase();
   let singleLetterStr = singleLetter.toLowerCase()
    
   for(let letter of string){
        if(!!accObj[letter]){
            accObj[letter] = accObj[letter] + 1;
        }else {
            accObj[letter] = 1;
        }
    }
    return accObj[singleLetterStr] || 0;
}

console.log('single letter count => ',singleLetterCount("PeRson", 'p'))

function lastElement(arr){
    return typeof arr === "object" && arr[arr.length - 1];
}

console.log('last element',lastElement([1, 2,3]))

function numberCompare(firstNum, secondNum){
    if(firstNum > secondNum){
        return "first num is greater";
    }else if(firstNum < secondNum){
        return "second num is greater";
    }else if(firstNum === secondNum){
        return "Numbers are equal";
    }
}

console.log('number compare => ' ,numberCompare(100002, 3))

// Array manipulation
function arrayManipulation(arr, command, location, value){
    if(command === 'remove' && location === 'end'){
        return arr.pop();
    }else if(command === 'remove' && location === 'beginning'){
        return arr.shift();
    }else if(command === 'add' && location === 'beginning'){
        if(!value) return 'value is required for this action';
         arr.unshift(value)
         return arr;
    }else if(command === 'add' && location === 'end'){
        if(!value) return 'value is required for this action'
        arr.push(value);
        return arr;
    }else{
        console.log('no action was applied');
        return arr
    }
}

console.log(arrayManipulation([1,2,3], "add", "end", 2000))

function isPalindrome(string) {
    if (string === string.split('').reverse().join('')) {
        return true
    }
    else {
      return false
    }
}

console.log(isPalindrome('a man a plan a canal panama'))

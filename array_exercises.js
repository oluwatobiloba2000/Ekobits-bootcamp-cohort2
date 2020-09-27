let people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.
(function logAllPeople(){
    for(let i = 0; i < people.length; i++){
       console.log("Logging from logAllPeople function : result =>" + people[i]);
    }
})();


// Write the command to remove "Greg" from the array.
people.shift();
console.log('greg has been removed', people);

// Write the command to remove "James" from the array.
people.pop();
console.log('James has been removed', people);

// Write the command to add "Matt" to the front of the array.
people.unshift('Matt');
console.log('Matt has been added', people);

// Write the command to add your name to the end of the array.
people.push('Oluwatobiloba');
console.log('My name has been added', people);

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(let i = 0; i < people.length; i++){

    console.log('from the loop =>' ,people[i]);
    if(people[i] === 'Mary') break;
}

// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
const newArray = people.splice(2, 0);
console.log('new array that does not include mary and matt', people)

// Write the command that gives the indexOf where "Mary" is located.
console.log('prints the index of mary in the array', people.indexOf('Mary'));

// Write the command that gives the indexOf where "Foo" is located (this should return -1).
people.indexOf('foo');

// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people.splice(2, 1, 'Elizabeth', 'Artie')
console.log("devon has been replaced with 'Elizabeth', 'Artie' =>", people);

// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people + " Bob";
console.log({withBob})
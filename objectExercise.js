let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// challenge solutions
// Write the command to add the language "Go" to the end of the languages array.
programming["languages"].push('Go');
console.log('Added Go Language', programming);


// Change the difficulty to the value of 7.
programming["difficulty"] = 7;

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming["jokes"];

// Write the command to add a new key called isFun and a value of true to the programming object.
programming['isFun'] = true;
console.log(programming)

// Using a loop, iterate through the languages array and console.log all of the languages.
for(let i = 0; i < programming["languages"].length; i++){
    console.log('from languages array => ',programming["languages"][i])
}

// Using a loop, console.log all of the keys in the programming object.
for (let key in programming){
    console.log({key});
}

// Using a loop, console.log all of the values in the programming object.
for (let key in programming){
    console.log({programmingValue: programming[key]});
}

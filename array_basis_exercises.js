// Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements
const arr = [
  "rice and chicken",
  "beans and plantain",
  "pounded yam and egusi soup",
];

// Access the second element in favoriteFoods.
arr[1];

// Change the last element in favoriteFoods to some other food.
arr[arr.length - 1] = "some other food";

// Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.
let formerFavouriteFood = arr.shift();

// Add a favorite food to the back of the favoriteFoods array.
arr.push("rice and chicken");

// Add a favorite food to the front of the favoriteFoods array.
arr.unshift("pizza");

// What happens when you try to pop from an empty array?
// ANS -> it will not see any value in the array, it will only return undefined

// In the examples below, use splice to convert the first array to the second array:
// 1. [2, 3, 4, 5] -> [2, 4, 5]
const newArray = [2, 3, 4, 5];
newArray.splice(1, 1);
console.log("new array after splice =>", newArray);

// 2. ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
const radioActivityArray = ["alpha", "gamma", "delta"];
radioActivityArray.splice(1, 0, "beta");
console.log("newRadoiActivityArray =>", radioActivityArray);

// 3. [10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const numberArray = [10, -10, -5, -3, 2, 1];
numberArray.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);
console.log({numberArray});
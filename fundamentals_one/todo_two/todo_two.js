
// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from
// the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countDown(num) {
    arr = [];
    for (var i = num; i >= 0; i--) {
        arr.push(i);
    }
}

countDown(9);

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

var myArray = [11, 21, 31, 41, 51, 61, 71, 81, 91]
console.log(printAndReturn(myArray));

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length.
// What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
    return (arr.length + arr[1]);
}
var myArray = [11, 21, 31, 41, 51, 61, 71, 81, 91];
var myOtherArray = ["bob", "hank", "joe"];
var myOtherOtherArray = [false, true, false, false, true];
console.log(firstPlusLength(myArray));
console.log(firstPlusLength(myOtherArray));
console.log(firstPlusLength(myOtherOtherArray));

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
function greaterThanSecond(arr) {
    counter = 0;
    for (var i = 0; i< arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            counter++;
        }
    }
    return counter;
}
var myArray = [11, 21, 31, 41, 51, 61, 71, 81, 91];
var myOtherArray = [1,3,5,7,9,13];
var myOtherOtherArray = [false, true, false, false, true];
console.log(greaterThanSecond(myArray));
console.log(greaterThanSecond(myOtherArray));
console.log(greaterThanSecond(myOtherOtherArray));

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are
// greater than its 2nd value.
// Print how many values this is. What will you do if the array is only one element long?
function greaterThanSecond(arr) {
    newArr = []
    if (arr.length > 1) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[1]) {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
}
var myArray = [11, 21, 31, 41, 51, 61, 71, 81, 91];
var myOtherArray = [1,3,5,7,9,13];
var myOtherOtherArray = [false, true, false, false, true];
console.log(greaterThanSecond(myArray).length);
console.log(greaterThanSecond(myOtherArray).length);
console.log(greaterThanSecond(myOtherOtherArray).length);
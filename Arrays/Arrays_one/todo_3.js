// To Do 3

// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values,
// and returns the same array (not a copy), preserving non-negatives’ order.
// As always, do not use built-in array functions.
function removeNegatives(arr) {
    for (var i = arr.length -1; i >=0; i--) {
        if (arr[i] < 0) {
            for (var j = i; j < arr.length-1; j++) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; 
            }
            arr.pop();
        }
    }
    return arr;
}

var myArray = [-1, 3, -5, -7, 9, -11, 13, 15, -17];
console.log(removeNegatives(myArray));

// Second-to-Last
// Return the second-to-last element of an array.
// Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    }
    else {
        return arr[arr.length - 2];
    }
}
var myArray = [42,true,4,"Kate",7]
var myOtherArray = [-1, 3, -5, -7, 9, -11, 13, 15, -17];
console.log(secondToLast(myArray));
console.log(secondToLast(myOtherArray));

// Second-Largest
// Return the second-largest element of an array.
// Given [42,1,4,Math.PI,7], return 7.
// If the array is too short, return null.

function secondLargest(inputArr) {
    if (inputArr.length < 2) {
        return null;
    }
    else {
        // sort the array
        var arr = inputArr;
        for (var i = 0; i < 2; i++) {
            for (var j = i+1; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            } 
        console.log(arr);
        }
    return arr[1];
    }
}
var myArray = [42,true,4,"Kate",7]
var myOtherArray = [-1, 3, -5, -7, 9, -11, 13, 15, -17];
console.log(secondLargest(myArray));
console.log(secondLargest(myOtherArray));

// Nth-to-Last
// Return the element that is N-from-array’s-end.
// Given ([5,2,3,6,4,9,7],3), return 4.
// If the array is too short, return null.

function nthToLast(arr, pos) {
    if (arr.length < pos) {
        return null;
    }
    else {
        return arr[arr.length - pos];
    }
}
var myArray = [5,2,3,6,4,9,7];
var myOtherArray = [-1, 3, -5, -7, 9, -11, 13, 15, -17];
console.log(nthToLast(myArray, 3));
console.log(nthToLast(myOtherArray, 6));

// Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects.
// Given arr and N, return the Nth-largest element, where (N-1) elements are larger.
// Return null if needed.

function nthLargest(inputArr, n) {
    if (inputArr.length < n) {
        return null;
    }
    else {
        // sort the array
        var arr = inputArr;
        for (var i = 0; i < n; i++) {
            for (var j = i+1; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            } 
        console.log(arr);
        }
    return arr[n-1];
    }
}
var myArray = [-1, 3, -5, -7, 9, -11, 13, 15, -17];
console.log(nthLargest(myArray, 2));
console.log(nthLargest(myArray, 6));

// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline.
// Let’s say you are given an array with heights of consecutive buildings,
// starting closest to you and extending away. Array [-1,7,3] would represent three buildings:
// first is actually out of view below street level, behind it is second at 7 stories high,
// third is 3 stories high (hidden behind the 7-story). You are situated at street level.
// Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7].
// Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function inView(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if ((arr[i] <= arr[i-1]) || (arr[i] < 1)) {
            for (var j = i; j < arr.length - 1; j++) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
            arr.pop();
            console.log(arr);
        }
    }
    return arr;
}

var myArray = [-1, 1, 1, 1, 7, 3]
var myOtherArray = [-1, 3, -5, -7, 9, -11, 13, 15, -17];

console.log(inView(myArray));
console.log(inView(myOtherArray));
// Shuffle
// In JavaScript, the Array object has numerous useful methods.
// It does not, however, contain a method that will randomize the order of an array’s elements.
// Let’s create shuffle(arr), to efficiently shuffle a given array’s values.
// Work in-place, naturally. Do you need to return anything from your function?
function shuffle(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var randInd = Math.floor(Math.random() * (arr.length - i)) + i;
        console.log(randInd);
        [arr[i], arr[randInd]] = [arr[randInd], arr[i]];
    }
    return arr;
}
var myArray = [1, 2, 3, 4, 5]
var myOtherArray = [-1, 3, -5, -7, 9, -11, 13, 15, -17];

console.log(shuffle(myArray));
// console.log(shuffle(myOtherArray));

// Remove Range
// Given array, and indices start and end, remove vals in that index range,
// working in-place (hence shortening the array).
// Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function removeRange(arr, start, end) {
    if (start > arr.length-1 || start < 0) {
        return "Invalid start index"
    }
    else if (end > arr.length-1 || end < 0 || end < start) {
        return "Invalid end index"
    }
    else {
        for (var i = end; i >= start; i--) {
            for (var j = i; j < arr.length - 1; j++) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
            arr.pop();
        }
        return arr;
    }
}

var myArray = [1, 2, 3, 4, 5]
var myOtherArray = [-1, 3, -5, -7, 9, -11, 13, 15, -17];
console.log(removeRange(myArray, 1, 2));
console.log(removeRange(myOtherArray, 2, 5));

// Intermediate Sums
// You will be given an array of numbers. After every tenth element,
// add an additional element containing the sum of those ten values.
// If the array does not end aligned evenly with ten elements,
// add one last sum that includes those last elements not yet been included in one of the earlier sums.
// Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

function intermediateSums(arr) {
    var lastSet = arr.length % 10;
    var sum = 0;
    for (var i = arr.length - 1; i > arr.length - (1 + lastSet); i--) {
        sum += arr[i];
    }
    arr[arr.length] = sum;
    // for loop incremented by 11 (10 plus the total one)
    for (var i = 0; i < arr.length; i += 11) {
        sum = 0;
        for (var j = i; j < i + 10; j++) {
            sum += arr[j];
        }
        // console.log("Sum: " + sum)
        for (var k = arr.length - 1; k > i + 10; k--) {
            [arr[k], arr[k-1]] = [arr[k-1], arr[k]];
        }
        arr[i + 10] = sum;
    }
    // add first 10 values
    // loop back to 10, shifting all elements one to the right.
    // assign sum to 10,
    // do the next set.
    return arr;
}
var myArray = [1,1,1,1,1,1,1,1,1,1, 2,2,2,2,2,2,2,2,2,2, 3,3,3,3,3,3];
console.log(intermediateSums(myArray));
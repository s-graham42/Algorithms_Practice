// Min to Front
// Given an array of comparable values, move the lowest element to array’s front,
// shifting backward any elements previously ahead of it. Do not otherwise change the array’s order.
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it.
// As always, do this without using built-in functions.

function minToFront(arr) {
    lowest = arr[0]
    index = 0
    // find the lowest value's index.
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
            index = i;
        }
    }
    if (lowest > 0) {
        for (i = index; i > 0; i--) {
            temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
    }
    return arr;
}

myArray = [4,2,1,3,5]
myOtherArray = [2,7,3,9,1,8,5,6,4]
console.log(minToFront(myArray))
console.log(minToFront(myOtherArray))

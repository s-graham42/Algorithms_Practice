
// Reverse
// Given a numerical array, reverse the order of values, in-place.
// The reversed array should have the same length, with existing elements moved to other
//indices so that order of elements is reversed.
// Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given.
// As always, do not use built-in array functions such as splice().
function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - (i+1)];
        arr[arr.length - (i+1)] = temp;
    }
    return arr;
}

myArray = [1, 3, 5, 7, 9];
myOtherArray = [12, 45, 62, 14, 97, 56, 11];
console.log(reverse(myArray));
console.log(reverse(myOtherArray));

// The other way!:

function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - (i+1)]] = [arr[arr.length - (i+1)], arr[i]];
    }
    return arr;
}

myArray = [1, 3, 5, 7, 9]; // [7, 9, 1, 3, 5]
// myOtherArray = [12, 45, 62, 14, 97, 56, 11]; // [56, 11, 12, 45, 62, 14, 97]
// console.log(reverse(myArray));
// console.log(reverse(myOtherArray));

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset.
// Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side,
// so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
function rotate(arr, shiftBy) {
    for (var i = 1; i <= abs(shiftBy); i++) {
        if (shiftBy > 0) {
            temp = arr[arr.length-1];
            for (var j = arr.length - 1; j > 0; j--) {
                arr[j] = arr[j-1];
            }
            arr[0] = temp;
        }
        else if (shiftBy < 0) {
            temp = arr[0];
            for (var j = 0; j < arr.length - 1; j++) {
                arr[j] = arr[j+1];
            }
            arr[arr.length - 1] = temp;
        }
    }
    return arr;
}

myArray = [1, 3, 5, 7, 9];
console.log(rotate(myArray, -2));

myOtherArray = [12, 45, 62, 14, 97, 56, 11];
console.log(rotate(myOtherArray, -5));


// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays.
// Return a new array containing the first array’s elements, followed by the second array’s elements.
// Do not alter the original arrays.
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
function arrConcat(arr1, arr2) {
    var newArray = arr1;
    for (var i = 0; i < arr2.length; i++) {
        newArray[newArray.length] = arr2[i];
    }
    return newArray
}

myArray = [1, 3, 5, 7, 9];
myOtherArray = [12, 45, 62, 14, 97, 56, 11];
console.log(arrConcat(myArray, myOtherArray));
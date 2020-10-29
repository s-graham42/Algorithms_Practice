// Push Front
// Given an array and an additional value, insert this value at the beginning of the array.
// Do this without using any built-in array methods.


function pushFront(arr, newNum) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = newNum;
    return tempArray;
}

var array = [2, 4, 6, 8];
var newValue = 10;

console.log(pushFront(array, newValue));

// Pop Front
// Given an array, remove and return the value at the beginning of the array.
// Do this without using any built-in array methods except pop().

function frontPop(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop()
    return arr;
}

givenArray = [1,3,5,7,9];
console.log(givenArray[0]);
console.log(frontPop(givenArray));
console.log(givenArray[0]);

// Insert At
// Given an array, index, and additional value, insert the value into array at given index.
// Do this without using built-in array methods. You can think of pushFront(arr,val)
// as equivalent to insertAt(arr,0,val).


function insert(arr, index, val) {
    for (var i = arr.length; i > index; i--) {
        arr[i] = arr[i-1];
    }
    arr[index] = val;
    return arr;
}

givenArray = [1,3,5,7,9,11];
console.log(insert(givenArray, 2, 42));
console.log(insert(givenArray, 0, 42));

// Remove At
// Given an array and an index into array, remove and return the array value at that index
// Do this without using built-in array methods except pop()
// Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, index) {
    for (var i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop()
    return arr;
}
givenArray = [1,3,5,7,9,11];
console.log(removeAt(givenArray, 2));
console.log(removeAt(givenArray, 3));

// Swap Pairs
// Swap positions of successive pairs of values of given array.
// If length is odd, do not change the final element.
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42].
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

givenArray = [1,3,5,7,9,11];
anotherArray = [11, 21, 31, 41, 51, 61, 71, 81, 91];
console.log(swapPairs(givenArray));
console.log(swapPairs(anotherArray));

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources.
// Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values.
// Because array elements are already in order, all duplicate values will be grouped together.
// As with all these array challenges, do this without using any built-in array methods.
function removeDuplicates(arr) {
    for (var i = arr.length-1; i > 0; i--) {
        if (arr[i] == arr[i-1]) {
            for (var j = i; j < arr.length; j++) {
                arr[j] = arr[j+1];
            }
            arr.pop();
        }
    }
    return arr;
}

givenArray = [1,3,5,5,7,9,9,11];
anotherArray = [11, 11, 21, 31, 31, 41, 51, 61, 71, 71, 81, 81, 91];
console.log(removeDuplicates(givenArray));
console.log(removeDuplicates(anotherArray));

// Second: Solve this without using any nested loops.
function removeDuplicates(arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i+1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

    givenArray = [1,3,5,5,7,9,9,11];
    anotherArray = [11, 11, 21, 31, 31, 41, 51, 61, 71, 71, 81, 81, 91];
    console.log(removeDuplicates(givenArray));
    console.log(removeDuplicates(anotherArray));
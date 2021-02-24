class Solution {
    constructor() {}
    // Biggie Size
    // Given an array, write a function that changes all positive numbers in the array to “big”.
    // Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
    biggieSize(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                arr[i] = "Big";
            }
        }
        return arr;
    }
    // Print Low, Return High
    // Create a function that takes an array of numbers. The  function should print the lowest value in the array,
    // and return the highest value in the array.
    printLowReturnHigh(arr) {
        var lowest;
        var highest;
        if (arr.length > 0){
            lowest = arr[0];
            highest = arr[0];
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < lowest) {
                    lowest = arr[i];
                } else if (arr[i] > highest) {
                    highest = arr[i];
                }
            }
            console.log("Lowest: " + lowest);
            return highest;
        }
    }

    // Print One, Return Another
    // Build a function that takes an array of numbers. The function should print the second-to-last value in the array,
    // and return first odd value in the array.
    printOneRetOther(arr) {
        if (arr.length > 1) {
            console.log("Second to last value: " + arr[arr.length - 2]);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    return arr[i];
                }
            }
        }
    }

    // Double Vision
    // Given an array, create a function to return a new array where each value in the original has been doubled.
    // Calling double([1,2,3]) should return [2,4,6] without changing original.
    doubleArray(arr) {
        var newArray = [];
        for (var i = 0; i < arr.length; i++) {
            newArray.push(arr[i] * 2);
        }
        return newArray;
    }

    // Count Positives
    // Given an array of numbers, create a function to replace last value with the number of positive values.
    // Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
    countPositives(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                sum += 1;
            }
        }
        if (sum > 0) {
            arr[arr.length -1] = sum;
        }
        return arr;
    }

    // Evens and Odds
    // Create a function that accepts an array. Every time that array has three odd values in a row, print
    // "That’s odd!" Every time the array has three evens in a row, print "Even more so!"
    evenAndOdds(arr) {
        var odds = 0;
        var evens = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                evens += 1;
                odds = 0;
            } else {
                odds += 1;
                evens = 0;
            }

            if (odds == 3) {
                console.log("That's odd!");
                odds = 0;
            } else if (evens == 3) {
                console.log("Even more so!")
                evens = 0;
            }
        }
    }

    // Increment the Seconds
    // Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
    incrementSeconds(arr) {
        for (var i = 1; i < arr.length; i += 2) {
            arr[i] = arr[i] + 1;
        }
        console.log(JSON.stringify(arr));
        return arr;
    }

    // Previous Lengths
    // You are passed an array containing strings. Working within that same array, replace each string with a number
    // – the length of the string at previous array index – and return the array.
    previousLengths(stringArr) {
        for (var i = stringArr.length - 1; i > 0; i--) {
            stringArr[i] = stringArr[i-1].length;
        }
        stringArr[0] = 0;
        return stringArr;
    }

    // Add Seven to Most
    // Build a function that accepts an array. Return a new array with all values except first, adding 7 to each.
    // Do not alter the original array.
    addSevenToMost(arr) {
        var newArr = [];
        for (var i = 1; i < arr.length; i++) {
            newArr.push(arr[i] + 7);
        }
        return newArr;
    }

    // Reverse Array
    // Given array, write a function to reverse values, in-place.
    // Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
    reverseArray(arr) {
        for (var i = 0; i < arr.length / 2; i ++) {
            [arr[i], arr[arr.length - (i + 1)]] = [arr[arr.length - (i + 1)], arr[i]];
        }
        return arr;
    }

    // Outlook: Negative
    // Given an array, create and return a new one containing all the values of the provided array,
    // made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
    negativeArray(arr) {
        for (var i = 0; i < arr.length; i ++) {
            if (arr[i] > 0) {
                arr[i] = arr[i] *= -1;
            }
        }
        return arr;
    }

    // Always Hungry
    // Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are
    // "food", then print "I'm hungry" once.
    hungry(stringArr) {
        var foods = false;
        for (var i = 0; i < stringArr.length; i ++) {
            if (stringArr[i] == "food") {
                console.log("Yummy!");
                foods = true;
            }
        }
        if (foods == false) {
            console.log("I'm hungry...");
        }
    }

    // Swap Toward the Center
    // Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. 
    // Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
    swapToCenter(arr) {
        for (var i = 0; i < arr.length / 2; i += 2) {
            [arr[i], arr[arr.length - (i + 1)]] = [arr[arr.length - (i + 1)], arr[i]];
        }
        return arr;
    }

    // Scale the Array
    // Given array arr and number num, multiply each arr value by num, and return the changed arr.
    scaleArray(arr, num) {
        for (var i = 0; i < arr.length; i ++) {
            arr[i] = arr[i] * num;
        }
        return arr;
    }

}

var sol = new Solution();
var myArray = [-1, 2, 6, 4, 5, -6, 7, 9, 11];
var myOtherArray = [0, 0, 0, 0, 0, 0]
var myEmptyArray = [];
var myStringArray = ["Ia", "Bob", "Chip", "Steve", "Benji", "Ulrich", "Normann"];
// console.log(sol.biggieSize(myArray));

// console.log("Highest: " + sol.printLowReturnHigh(myArray));

// console.log("First odd value: " + sol.printOneRetOther(myArray));
// console.log("First odd value: " + sol.printOneRetOther(myEmptyArray));

// console.log("myArray Doubled: " + sol.doubleArray(myArray));

// console.log("Count Positives: " + sol.countPositives(myArray));
// console.log("Count Positives: " + sol.countPositives(myOtherArray));

// sol.evenAndOdds(myArray);
// sol.evenAndOdds(myOtherArray);

// console.log(JSON.stringify(sol.incrementSeconds(myArray)));

// console.log(JSON.stringify(sol.previousLengths(myStringArray)));

// console.log(JSON.stringify(sol.addSevenToMost(myArray)));

// console.log(JSON.stringify(sol.reverseArray(myArray)));

// console.log(JSON.stringify(sol.negativeArray(myArray)));

// sol.hungry(myStringArray);

// console.log(JSON.stringify(sol.swapToCenter(myStringArray)));
// console.log(JSON.stringify(sol.swapToCenter(myArray)));

console.log(JSON.stringify(sol.scaleArray(myArray, 10)));



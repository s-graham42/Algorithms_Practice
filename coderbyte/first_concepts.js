// sum an array
// function sumArray(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// myArray = [2, 4, 6, 8, 12, 15, 16, 1, 18, 22, 45, 56, 345, 765, 23, 098, 345, 23];
// startTime = Date.now();
// console.log(sumArray(myArray));
// endTime = Date.now();
// console.log((endTime - startTime) + "ms");

// average an array
function avgArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

myArray = [2, 4, 6, 8, 12, 15, 16, 1, 18, 22, 45, 56, 345, 765, 23, 98, 345, 23];
startTime = Date.now();
console.log(avgArray(myArray));
endTime = Date.now();
console.log((endTime - startTime) + "ms");
// function countdown() {
//     for (var i = 1; i<6; i++) {
//         console.log(i)
//     }
// }

// countdown();

// function countToTwelveRec(i) {
//     if (i == 12) {
//         return "Function's Done!";
//     }
//     console.log(i)
//     return countToTwelveRec(i + 1);
// }

// console.log(countToTwelveRec(1));

function rSigma(num) {
    if (num == 0) {
        return 0;
    }
    console.log("num is " + num);
    return num + rSigma(num-1);
}

console.log(rSigma(4));
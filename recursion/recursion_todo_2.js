// Recursive Fibonacci
// Write rFib(num). Recursively compute and return numth Fibonacci value.
// As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 
// rFib(2) = 1 (0+1); 
// rFib(3) = 2 (1+1); 
// rFib(4) = 3 (1+2); 
// rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.

function rFib(num) {
    if (parseInt(num) == 1){
        return 1;
    }
    else if (parseInt(num) < 1) {
        return 0;
    }
    else {
    return rFib(parseInt(num)-1) + rFib(parseInt(num)-2);
    }
}

console.log(rFib(3.65));
console.log(rFib(-2));
console.log(rFib(0));
console.log(rFib(5));
console.log(rFib(6));
console.log(rFib(7));
console.log(rFib(8));
console.log(rFib(25));

// Recursive “Tribonacci”
// Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two.
// First three Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1);
// rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.

function rTrib(num) {
    if (parseInt(num) == 2){
        return 1;
    }
    else if (parseInt(num) < 2) {
        return 0;
    }
    else {
    return rTrib(parseInt(num) - 1) + rTrib(parseInt(num) - 2) + rTrib(parseInt(num) - 3);
    }
}

console.log(rTrib(0));
console.log(rTrib(-2));
console.log(rTrib(3));
console.log(rTrib(4));
console.log(rTrib(5));
console.log(rTrib(6));
console.log(rTrib(7));

// Paging Dr. Ackermann
// The Ackermann function is among the earliest examples of a computable but not primitive-recursive function.
// It grows rapidly and hence can overflow the JavaScript stack frame even at very low values.
// This function accepts two non-negative integer values, num1 and num2, and follows these rules:

// ackermann(0,num2) == num2+1;
// ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (otherwise see #1);
// ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).
// Don’t be dismayed if a num1 value as low as 4 “blows your stack”. That’s the nature of this function!

function ackermann(num1, num2) {
    if (num1 == 0) {
        return num2 + 1;
    }
    else if (num2 == 0) {
        return ackermann(num1 - 1, 1)
    }
    else {
        return ackermann(num1 - 1, ackermann(num1, num2 - 1))
    }
}

console.log(ackermann(1, 1))
console.log(ackermann(3, 4))

// Zibonacci
// This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, hence the name.
// A so-called ‘Zibonacci’ series would be defined by the following rules:

// Zib(0) == 1;
// Zib(1) == 1;
// Zib(2) == 2;
// Zib(2n+1) == Zib(n)+Zib(n-1)+1, if n > 0 (i.e. odd values 3 and higher);
// Zib(2n) == Zib(n)+Zib(n+1)+1, if n > 1 (i.e. even values 4 and higher).
// Create the Zibonacci(num) function. What is Zibonacci(10)? Zibonacci(100)?

// Second: For a given number that might be a Zibonacci result, find the largest index that maps to that result. bestZibNum(3186) == 2467, bestZibNum(3183) == null.
function zib(num) {
    if (num < 2) {
        return 1;
    }
    else if (num == 2) {
        return 2;
    }
    else if (num % 2 != 0){
        n = ((num - 1) * 0.5)
        return (zib(n) + zib(n - 1) + 1);
    }
    else {
        n = ((num) * 0.5)
        return (zib(n) + zib(n + 1) + 1);
    }
}

console.log(zib(1))
console.log(zib(2))
console.log(zib(3))
console.log(zib(4))
console.log(zib(5))
console.log(zib(6))
console.log(zib(7))
console.log(zib(8))
console.log(zib(9))
console.log(zib(10))
console.log(zib(100))
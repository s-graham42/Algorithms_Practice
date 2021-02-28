    // To Do 1

class Solution {
    constructor () {}

    // Sigma
    // Implement function sigma(num) that given a number, returns the sum of all positive integers up to
    // number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
    sigma(num) {
        var sum = 0;
        for (var i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
    }
    
    sigmaRecursive(num) {
        if (num == 1) {
            return 1;
        } else {
            return num + this.sigmaRecursive(num - 1);
        }
    }

    // Factorial
    // Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number,
    // returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 
    
    // For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
    factorial(num) {
        var product = 1;
        for (var i = 1; i <= num; i++) {
            product *= i;
        }
        return product;
    }

    factorialRecursive(num) {
        if (num == 1) {
            return 1;
        } else {
            return num * this.factorialRecursive(num - 1);
        }
    }
    
    // Star Art
    // Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and
    // asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively.
    // Depending on which function is called, those stars should be left-justified (the first star would be very
    // first char in the text field), or right-justified (the last star would be very last char in the text field,
    // with potentially some number of spaces at beginning of text field before the block of stars start),
    // or centered in the 75-
    // character text field (with the same number of spaces on either side of the block of stars, plus/minus one).
    
    // Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
    // Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side.
    // The last num characters should be asterisks; the other 75 should be spaces.   
    // Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75.
    // The middle num characters should be asterisks; the rest of the 75 spaces.
    appendSpaces(str, numSpaces) {
        for (var i = 0; i < numSpaces; i++) {
            str = str + " ";
        }
        return str;
    }
    appendStars(str, numStars) {
        for (var i = 0; i < numStars; i++) {
            str = str + "*";
        }
        return str;
    }
    appendChars(str, numChars, char ) {
        for (var i = 0; i < numChars; i++) {
            str = str + char;
        }
        return str;
    }
    drawLeftStars(num) {
        var newStr = "";
        newStr = this.appendStars(newStr, num);
        newStr = this.appendSpaces(newStr, (75 - num));
        newStr = newStr + ".";
        return newStr
    }
    drawRightStars(num) {
        var newStr = "";
        newStr = this.appendSpaces(newStr, (75 - num));
        newStr = this.appendStars(newStr, num);
        newStr = newStr + ".";
        return newStr
    }
    drawCenteredStars(num) {
        var newStr = "";
        newStr = this.appendSpaces(newStr, ((75 - num) /2));
        newStr = this.appendStars(newStr, num);
        newStr = this.appendSpaces(newStr, ((75 - num) /2));
        newStr = newStr + ".";
        return newStr
    }

    // From the above, derive the following that accepts and draws the given characters, not just asterisks:
    
    // drawLeftChars(num,char)
    // drawRightChars(num,char)
    // drawCenteredChars(num,char)
    // For all three of these, you can safely assume that 'char'is a string with the length of 1.
    drawLeftChars(num, char) {
        var newStr = "";
        newStr = this.appendChars(newStr, num, char);
        newStr = this.appendSpaces(newStr, (75 - num));
        newStr = newStr + ".";
        return newStr
    }
    drawRightChars(num, char) {
        var newStr = "";
        newStr = this.appendSpaces(newStr, (75 - num));
        newStr = this.appendChars(newStr, num, char);
        newStr = newStr + ".";
        return newStr
    }
    drawCenteredChars(num, char) {
        var newStr = "";
        newStr = this.appendSpaces(newStr, ((75 - num) /2));
        newStr = this.appendChars(newStr, num, char);
        newStr = this.appendSpaces(newStr, ((75 - num) /2));
        newStr = newStr + ".";
        return newStr
    }



}

var sol = new Solution();

// console.log(sol.sigma(53));
// console.log(sol.sigmaRecursive(53));

// console.log(sol.factorial(32));
// console.log(sol.factorialRecursive(32));

console.log(sol.drawLeftStars(25));
console.log(sol.drawRightStars(25));
console.log(sol.drawCenteredStars(25));

console.log(sol.drawLeftChars(10, "+"));
console.log(sol.drawRightChars(10, "&"));
console.log(sol.drawCenteredChars(10, "#"));
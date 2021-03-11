// To Do 2

class SolutionTwo {
    contructor() {}

// Threes and Fives
// Create threesFives() that adds values from 100 and 4,000,000 (inclusive) if that value is evenly divisible by
// 3 or 5 but not both. Display the final sum in the console.
    threeFives() {
        var sum = 0;
        for (var i = 100; i <= 4000000; i++) {
            if (i % 3 == 0 && i % 5 != 0) {
                sum += i;
            } else if (i % 5 == 0 && i % 3 != 0) {
                sum += i;
            }
        }
        return sum;
    }

// Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for
// your range. Think of threesFives() as betterThreesFives(100,4000000).
    betterThreeFives(start, end) {
        var sum = 0;
        for (var i = start; i <= end; i++) {
            if (i % 3 == 0 && i % 5 != 0) {
                sum += i;
            } else if (i % 5 == 0 && i % 3 != 0) {
                sum += i;
            }
        }
        return sum;
    }
// Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number
// of American cents, compute and print how to represent that amount with the smallest number of coins.
// Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
    getChange(num) {
        var numQuarters = Math.floor(num / 25);
        var changeValue = numQuarters * 25;
        var numDimes = Math.floor((num - changeValue) / 10);
        changeValue += (numDimes * 10);
        var numNickels = Math.floor((num - changeValue) / 5);
        changeValue += (numNickels * 5);
        var numPennies = num - changeValue;
        console.log(num.toString() + " cents can be represented by:");
        console.log("quarters: " + numQuarters);
        console.log("dimes: " + numDimes);
        console.log("nickels: " + numNickels);
        console.log("pennies: " + numPennies);
    }
// Example output, given (94):

// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4

// add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.
    getBigChange(num) {
        var numDollars = Math.floor(num / 100);
        var changeValue = numDollars * 100;
        var numHalfDollars = Math.floor((num - changeValue) / 50);
        changeValue += (numHalfDollars * 50);
        var numQuarters = Math.floor((num - changeValue) / 25);
        changeValue += numQuarters * 25;
        var numDimes = Math.floor((num - changeValue) / 10);
        changeValue += (numDimes * 10);
        var numNickels = Math.floor((num - changeValue) / 5);
        changeValue += (numNickels * 5);
        var numPennies = num - changeValue;
        console.log(num.toString() + " cents can be represented by:");
        console.log("dollars: " + numDollars);
        console.log("Half Dollars: " + numHalfDollars);
        console.log("quarters: " + numQuarters);
        console.log("dimes: " + numDimes);
        console.log("nickels: " + numNickels);
        console.log("pennies: " + numPennies);
    }


// Messy Math Mashup
// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to
// the given num, except for the following special cases of our count value:

// If current count (not num) is evenly divisible by 3, don’t add to the sum; skip to the next count;
// Otherwise, if the current count is evenly divisible by 7, include it twice in sum instead of once;
// Regardless of the above, if the current count is exactly 1/3 of num, return -1 immediately.
// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.
    messyMath(num) {
        var sum = 0;
        for (var i = 0; i <= num; i++) {
            if (i == num / 3) {
                return -1;
            } else if (i % 3 == 0) {
                continue;
            } else if (i % 7 == 0) {
                sum += 2 * i;
            } else {
                sum += i;
            }
            return sum;
        }
    }


// Twelve-Bar Blues
// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then
// "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.

// Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is
// the sum of the previous two, starting with values 0 and 1. Your function should accept one argument,
// an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). 

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1),
// fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3),
// fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.



// Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums
// a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. 

// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.



// Clock Hand Angles
// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to
// unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an
// analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given
// a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands.
// As a review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print
// "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730
// (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs.
// Minute hand: 93 degs. Second hand: 180 degs." 

// Note: in the second example, the angle for the minute hand is not simply 90 degrees;
// it has advanced a bit further, because of the additional 30 seconds in that minute so far.

// Second: also calculate and print degrees for an additional “week hand” that rotates once each week.

// Is Prime
// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1.
// Many highly optimized solutions exist, but for now, just create one that is easy to understand and debug.
}

var sol = new SolutionTwo();

// console.log(sol.threeFives());
// console.log(sol.betterThreeFives(4, 20));

// sol.getChange(100);
// sol.getBigChange(487);

console.log(sol.messyMath(8));
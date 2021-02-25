// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = "stephen";
console.log(myNumber);
console.log(myName);
var temp = myNumber;
myNumber = MyName;
myName = temp;
console.log(myNumber);
console.log(myName);

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.
for (var i = -52; i < 1067; i++)
{
    console.log(i);
}

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful() {
    for (var i=0; i < 98; i++) {
    console.log((i+1) + ": good morning!");
    }
}
beCheerful();

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for (var i = -300; i < 1; i += 3)
{
    if ((i != -3) && (i != -6))
    {
        console.log(i);
    }
}

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

var x = 2000;
while (x <= 5280) {
    console.log(x);
    x++;
}

// Leap Year
// Write a function that determines whether a given year is a leap year.
// If a year is divisible by four, it is a leap year, unless it is divisible by 100.
// However, if it is divisible by 400, then it is.
function isLeapYear(year) {
    if (year % 400 === 0) {
        console.log(year + " is a Leap Year!")
    }
    else if (year % 100 === 0) {
        console.log(year + " is not a leap year.")
    }
    else if (year % 4 === 0) {
        console.log(year + " is a Leap Year!")
    }
    else {
        console.log(year + " is not a leap year.")
    }
}

for (var i = 1975; i < 2020; i++) {
    isLeapYear(i)
}

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

var counter = 0;
for (var i = 512; i < 4097; i++) {
    if (i % 5 === 0){
        console.log(i);
        counter += 1;
    }
}
console.log("Total: " + counter);

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
var num = 6;
while (num < 60001) {
    console.log(num);
    num += 6;
}

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for (var i = 1; i < 101; i++){
    if ((i % 5 === 0) && (i % 10 === 0)){
        console.log("Coding Dojo");
    }
    else if (i % 5 === 0){
        console.log("Coding");
    }
    else{
        console.log(i);
    }
}

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

function printIt(incoming) {
    console.log(incoming);
}
printIt("Hello World!");
printIt(42);

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
var sum = 0;
for (var i = -299999; i < 300000; i += 2) {
    sum += i;
}
console.log(sum);

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

var counter = 2016;
while (counter > 0) {
    console.log(counter);
    counter -= 4;
} 

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult,
// print multiples of mult from highNum down to lowNum, using a FOR.
// For (2,9,3), print 9 6 3 (on successive lines).
function countDown(lowNum, highNum, mult) {
    for (var i = highNum; i > lowNum - 1; i--) {
        if (i % mult === 0) {
        console.log(i);
        }
    }
}

countDown(2, 9, 3);
countDown(0, 49, 5);

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful,
// but the problem is essentially identical; don’t be thrown off! Given 4 parameters
// (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3.
// One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE.
// Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function finalCountDown(param1, param2, param3, param4) {
    for (var i = param2; i <= param3; i++) {
        if (i % param1 === 0) {
            if (i === param4) {
                continue;
            }
            else {
                console.log(i)
            }
        }
    }
}

finalCountDown(3, 5, 17, 9);
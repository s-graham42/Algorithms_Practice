// To Do 4

class Solution {
    contructor() {}

// Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount.
// Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter).
// Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
    shortenArray(arr, num) {
        for (var i = 0; i < num; i++) {
            arr[i] = arr[arr.length - (num - i)];
        }
        arr.length = num;
        return arr;
    }

// Math Help
// Cartman doesn’t really like math; he needs help.
// You are given two numbers – coefficients M and B in the equation Y = MX + B.
// Build a function to return the X-intercept
// (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero;
//     Cartman just snorts in his general direction).
    getXIntercept(m, b) {
        return (-b / m);
    }

// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens.
// Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes,
// 25 blizzards and 30 meteors (for 100 days total).
// If these probabilities continue, write whatHappensToday() to print a day’s outcome.
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    whatHappensToday() {
        var today = getRandomInt(1, 100);
        console.log(today);
        var killer = ""
        if (today <= 10) {
            killer = "A volcano";
        } else if (today <= 25) {
            killer = "A tsunami";
        } else if (today <= 45) {
            killer = "An earthquake";
        } else if (today <= 70){
            killer = "A blizzard";
        } else {
            killer = "A meteor";
        }
        return ("Oh my God!!  " + killer + " killed Kenny!!  You Bastard!!");
    }

// What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another.
// Change whatHappensToday() function to create whatReallyHappensToday().
// In this new function test for each disaster independently, instead of assuming exactly one disaster will happen.
// In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!
    whatReallyHappened() {
        var killers = [];

        if (this.getRandomInt(1, 100) <= 10) {
            killers.push("a volcano");
        }
        if (this.getRandomInt(1, 100) <= 15) {
            killers.push("a tsunami");
        }
        if (this.getRandomInt(1, 100) <= 20) {
            killers.push("an earthquake");
        }
        if (this.getRandomInt(1, 100) <= 25) {
            killers.push("a blizzard");
        }
        if (this.getRandomInt(1, 100) <= 30) {
            killers.push("a meteor");
        }
        console.log(JSON.stringify(killers));
        var message = ("Oh my God!!  Kenny was killed by  You Bastard!!");
        if (killers.length == 0) {
            return "Kenny Survives!";
        } else if (killers.length == 1) {
            return ("Oh my God, " + killers[0] + " killed Kenny!!  You Bastard!!");
        } else if (killers.length == 2) {
            return ("Oh my God, " + killers[0] + " and " + killers[1] + " killed Kenny!!  You Bastard!!");
        } else {
            message = "Oh my God";
            for (var i = 0; i < killers.length; i++) {
                if (i == killers.length - 1) {
                    message = message + ", and " + killers[i] + " killed Kenny!!  You Bastard!!";
                } else {
                    message = message + ", " + killers[i];
                }
            }
        }
        return message;
    }

// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with
// a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day,
// then went up by an additional .02 on the second day, then up by .03 more on the third day, etc.
// all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?
    soaringIQ(lastDay) {
        var iq = 101;
        for (var i = 1; i < lastDay + 1; i++) {
            iq += (0.01 * i);
        }
        return iq;
    }

// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade,
// given an integer representing a score from 0 to 100?
// Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’.
// For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".
    letterGrade(avg) {
        var grade = "";
        if (avg < 60) {
            grade = "F";
        } else if (avg < 70) {
            grade = "D";
        } else if (avg < 80) {
            grade = "C";
        } else if (avg < 90) {
            grade = "B";
        } else {
            grade = "A";
        }
        return ("Score: " + avg + ".  Grade: " + grade);
    }

// More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores,
// and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+).
// Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .
    moreAccurateGrades(avg) {
        var grade = "";
        var mod = ""
        if (avg < 60) {
            grade = "F";
        } else if (avg < 70) {
            grade = "D";
        } else if (avg < 80) {
            grade = "C";
        } else if (avg < 90) {
            grade = "B";
        } else {
            grade = "A";
        }

        if (grade != "A") {
            if (avg % 10 > 7) {
                mod = "+";
            } else if (avg % 10 < 2) {
                mod = "-"
            }
        } else {
            if (avg == 90 || avg == 91) {
                mod = "-"
            }
        }


        return ("Score: " + avg + ".  Grade: " + grade + mod);
    }



}


var sol = new Solution();
var myArray = [2, 4, 6, 8, 10];
var myOtherArray = [12, 6, 24, 8, 36, 10, 48, 12, 60, 14, 72, 16, 84, 18, 96, 20];

// console.log(JSON.stringify(sol.shortenArray(myArray, 4)));
// console.log(JSON.stringify(sol.shortenArray(myOtherArray, 8)));

// console.log("x intercept of m = 10 and b = 5 for y = mx + b: \n\t" + sol.getXIntercept(10, 5));

// console.log(sol.whatHappensToday());

// console.log(sol.whatReallyHappened());

// console.log("Final IQ after 98 days: " + sol.soaringIQ(98));

// console.log(sol.letterGrade(89));

 console.log(sol.moreAccurateGrades(100));
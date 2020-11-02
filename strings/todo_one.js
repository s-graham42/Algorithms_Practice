// Strings To Do 1

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function remove_blanks(input) {
    newArray = input.split(" ");
    newString = newArray.join("");
    return newString;
}

console.log(remove_blanks(" Pl ayTha tF u nkyM usi c "));

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function get_digits(input) {
    arr = []
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) >= '0' && input.charAt(i) <= '9') {
            arr.push(input.charAt(i));
        }
    }
    newString = parseInt(arr.join(""))
    return newString;
}

myString = "0s1a3y5w7h9a2t4?6!8?0";
console.log(get_digits(myString));

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(input) {
    strArr = input.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0);
    }
    return strArr.join("").toUpperCase();
}

myString = "there's no free lunch - gotta pay yer way.";
myOtherString = "Live from New York, it's Saturday Night!";
console.log(acronym(myString))
console.log(acronym(myOtherString))

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function non_spaces(str) {
    stringArray = str.split(" ");
    newString = stringArray.join("");
    return newString.length
}

myString = "there's no free lunch - gotta pay yer way.";
myOtherString = "Live from New York, it's Saturday Night!";
myOtherOtherString = "Honey pie, you are driving me crazy";

console.log(non_spaces(myString));
console.log(non_spaces(myOtherString));
console.log(non_spaces(myOtherOtherString));

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

function remove_short(arr, size) {
    for (var i = arr.length-1; i >= 0; i--) {
        if (arr[i].length < size) {
            for (var j = i+1; j < arr.length; j++) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            }
            arr.pop();
        }
    }
    return arr;
}
myString = "there's no free lunch - gotta pay yer way.";
myOtherString = "Live from New York, it's Saturday Night!";
myOtherOtherString = "Honey pie, you are driving me crazy";

myArray = myString.split(" ");
myOtherArray = myOtherString.split(" ");
myOtherOtherArray = myOtherOtherString.split(" ");

console.log(remove_short(myArray, 4));
console.log(remove_short(myOtherArray, 4));
console.log(remove_short(myOtherOtherArray, 4));
// Credit Card Validation
// The Luhn formula is sometimes used to validate credit card numbers.
// Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card),
//  and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// 1. Set aside the last digit; do not include it in these calculations (until step 5);
// 2. Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// 3. If any results are larger than 9, subtract 9 from them;
// 4. Add all numbers (not just our odds) together;
// 5. Now add the last digit back in – the sum should be a multiple of 10.

// For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8],
// then after step 2) it is [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18.
// After step 5) our value is 20, so ultimately we return true.
// If the final digit were any non-multiple-of-10, we would instead return false.

function isCreditCardValid(arr) {
    var last_digit = arr.pop();
    var sum = 0;
    for (var i = arr.length - 1; i >=0; i -= 2) {
        arr[i] = arr[i] * 2;
        if (arr[i] > 9) {
            arr[i] -= 9;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum += last_digit;
    if (sum % 10 === 0) {
        return true;
    }
    return false
}

var myArr = [5, 2, 2, 8, 2];
var myCC = [4,5,3,2,0,8,4,5,6,0,3,4,8,5,4,5]
var myOtherCC = [6,8,4,9,8,7,9,4,9,4,9,8,4,9,8,4]
var myOtherOtherCC = [4,5,3,9,8,6,8,2,7,1,6,9,2,4,1,4,4,3,7]

console.log(isCreditCardValid(myArr));
console.log(isCreditCardValid(myCC));
console.log(isCreditCardValid(myOtherCC));
console.log(isCreditCardValid(myOtherOtherCC));
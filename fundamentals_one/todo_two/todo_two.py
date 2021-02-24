#To Do Two in Python

class Solution:
    # Countdown
    # Create a function that accepts a number as an input. Return a new array that counts down by one, from
    # the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
    def countDown(self, num):
        newArr = []
        for i in range(num, -1, -1):
            newArr.append(i)
        return newArr

    # Print and Return
    # Your function will receive an array with two numbers. Print the first value, and return the second
    def printAndReturn(self, arr):
        print(arr[0])
        return arr[1]

    # First Plus Length
    # Given an array, return the sum of the first value in the array, plus the array’s length.
    # What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
    def firstPlusLength(self, arr):
        return arr[0] + len(arr)

    # Values Greater than Second
    # For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
    def gtSecond(self, arr):
        numGreater = 0
        for i in arr:
            if i > arr[1]:
                numGreater += 1
                print(i)
        return numGreater

    # Values Greater than Second, Generalized
    # Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value.
    # Print how many values this is. What will you do if the array is only one element long?
    def gtSecondGeneralized(self, arr):
        if len(arr) < 2:
            return "Error: Array Must Be longer than 1 item."
        newArr = []
        numGreater = 0
        for i in arr:
            if i > arr[1]:
                numGreater += 1
                newArr.append(i)
        print(f"Values Greater than second index: {numGreater}")
        return newArr

    # This Length, That Value
    # Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
    def lengthAndValue(self, num1, num2):
        newArr = []
        for i in range(num1):
            newArr.append(num2)
        if num1 == num2:
            print("--  Jinx!  --")
        return newArr

    # Fit the First Value
    # Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
    # if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
    def fitFirstValue(self, arr):
        if arr[0] > len(arr):
            print("Too Big!")
        elif arr[0] < len(arr):
            print("Too Small!")
        else:
            print("Just Right.")

    # Fahrenheit to Celsius
    # Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a
    # number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees.
    # For review, Fahrenheit = (9/5 * Celsius) + 32.
    def fahrenheitToCelsius(self, fDegrees):
        return round((fDegrees-32) * (5/9), 2)

    # Celsius to Fahrenheit
    # Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
    def celsiusToFahrenheit(self, cDegrees):
        return round(((9/5) * cDegrees) + 32, 2)

    # (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex,
    # so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending),
    # checking whether it is equal to the corresponding Fahrenheit value.
    def findEquivalentFdegrees(self):
        for i in range(200, -360, -1):
            if self.celsiusToFahrenheit(i) == i:
                print(f"Equivalent Degree Value found: {i} degrees in Celcius is {i} degrees in Fahrenheit.")

sol = Solution()
# print(f"CountDown: {sol.countDown(5)}")

# print(f"PrintAndReturn: {sol.printAndReturn([333, 666])}")

# print(f"firstPlusLength: {sol.firstPlusLength([2, 4, 6, 8, 0])}")
# # myArr = ['what?', 4, 6, 8, 0]
# # print(f"firstPlusLength: {sol.firstPlusLength(myArr)}")
# print(f"firstPlusLength: {sol.firstPlusLength([False, 4, 6, 8, 0])}")
# myArr = [16, 11, 18, 3, 3, 10, 2, 17]
# myOtherArray = [3,2,3]
# # print(f"Values Greater than second index: {sol.gtSecond(myArr)}")
# print(sol.gtSecondGeneralized(myArr))
# print(sol.gtSecondGeneralized(myOtherArray))

# print(sol.lengthAndValue(12, "Howdy"))
# print(sol.lengthAndValue(12, 12))
# print(sol.lengthAndValue(1, True))

# sol.fitFirstValue(myArr)

print(sol.fahrenheitToCelsius(70))
print(sol.celsiusToFahrenheit(21.11))

sol.findEquivalentFdegrees()

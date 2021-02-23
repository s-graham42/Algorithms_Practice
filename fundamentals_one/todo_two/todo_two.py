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


sol = Solution()
# print(f"CountDown: {sol.countDown(5)}")

# print(f"PrintAndReturn: {sol.printAndReturn([333, 666])}")

# print(f"firstPlusLength: {sol.firstPlusLength([2, 4, 6, 8, 0])}")
# # myArr = ['what?', 4, 6, 8, 0]
# # print(f"firstPlusLength: {sol.firstPlusLength(myArr)}")
# print(f"firstPlusLength: {sol.firstPlusLength([False, 4, 6, 8, 0])}")
myArr = [16, 11, 18, 3, 3, 10, 2, 17]
# print(f"Values Greater than second index: {sol.gtSecond(myArr)}")
# To Do 3

class Solution:
# Biggie Size
# Given an array, write a function that changes all positive numbers in the array to “big”.
# Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
    def biggieSize(self, arr):
        for i in range(len(arr)):
            if arr[i] > 0:
                arr[i] = "big"
        return arr

# Print Low, Return High
# Create a function that takes an array of numbers. The function should print the lowest value in the array,
# and return the highest value in the array.
    def printLowRetHigh(self, arr):
        lowest = arr[0]
        highest = arr[0]
        for i in range(len(arr)):
            if arr[i] < lowest:
                lowest = arr[i]
            elif arr[i] > highest:
                highest = arr[i]
        print(lowest)
        return highest

# Print One, Return Another
# Build a function that takes an array of numbers. The function should print the second-to-last value in the array,
# and return first odd value in the array.
    def printOneRetAnother(self, arr):
        print(arr[len(arr) - 2])
        for i in arr:
            if i % 2 != 0:
                return i
        return None

# Double Vision
# Given an array, create a function to return a new array where each value in the original has been doubled.
# Calling double([1,2,3]) should return [2,4,6] without changing original.
    def doubleArray(self, arr):
        newArray = []
        for i in arr:
            newArray.append(i * 2)
        return newArray

# Count Positives
# Given an array of numbers, create a function to replace last value with the number of positive values.
# Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
    def countPositives(self, arr):
        positives = 0
        for i in arr:
            if i > 0:
                positives += 1
        arr[len(arr) - 1] = positives
        return arr

# Evens and Odds
# Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!"
# Every time the array has three evens in a row, print "Even more so!"
    def evensAndOdds(self, arr):
        evens = 0
        odds = 0
        for i in arr:
            if i % 2 == 0:
                evens += 1
                odds = 0
            else:
                odds += 1
                evens = 0

            if evens == 3:
                print("Even more so!")
                evens = 0
            elif odds == 3:
                print("That's odd!")
                odds = 0

# Increment the Seconds
# Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.
    def incrementSeconds(self, arr):
        for i in range(0, len(arr), 2):
            arr[i] += 1
        print(arr)
        return arr

# Previous Lengths
# You are passed an array containing strings. Working within that same array, replace each string with a number –
# the length of the string at previous array index – and return the array.
    def previousLengths(self, stringArr):
        for i in range(len(stringArr) - 1, 0, -1):
            stringArr[i] = len(stringArr[i - 1])
        stringArr[0] = 0
        return stringArr

# Add Seven to Most
# Build a function that accepts an array. Return a new array with all values except first, adding 7 to each.
# Do not alter the original array.
    def addSevenToMost(self, arr):
        newArray = []
        for i in range(1, len(arr)):
            newArray.append(arr[i] + 7)
        return newArray

# Reverse Array
# Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
    def reverseArray(self, arr):
        for i in range(len(arr) // 2):
            arr[i], arr[len(arr) - (i + 1)] = arr[len(arr) - (i + 1)], arr[i]
        return arr


# Outlook: Negative
# Given an array, create and return a new one containing all the values of the provided array, made negative
# (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
    def negativeArray(self, arr):
        for i in range(len(arr)):
            if arr[i] > 0:
                arr[i] *= -1
        return arr


# Always Hungry
# Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".
# If no array elements are
# "food", then print "I'm hungry" once.
    def hungry(self, arr):
        foods = 0
        for i in arr:
            if i == "food":
                print("Yummy!")
                foods += 1
        if foods == 0:
            print("I'm hungry...")

# Swap Toward the Center
# Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. 
# Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
    def swapToCenter(self, arr):
        for i in range(0, len(arr) // 2, 2):
            arr[i], arr[len(arr) - (i + 1)] = arr[len(arr) - (i + 1)], arr[i]
        return arr

# Scale the Array
# Given array arr and number num, multiply each arr value by num, and return the changed arr.
    def scaleArray(self, arr, num):
        for i in range(len(arr)):
            arr[i] *= num
        return arr


sol = Solution()
myArray = [-1, 2, 6, 4, 5, -6, 7, 9, 11, 12, 14, 16]
myOtherArray = [0, 0, 0, 0, 0, 0]
myEmptyArray = []
myStringArray = ["Ia", "Bob", "Chip", "Steve", "Benji", "Ulrich", "Normann"]
myFoodArray = ["Ia", "food", "Chip", "food", "Benji", "Ulrich", "food"]

# print(sol.biggieSize(myArray))

# print(sol.printLowRetHigh(myArray))

# print(sol.printOneRetAnother(myArray))

# print(sol.doubleArray(myArray))

# print(sol.countPositives(myArray))

# sol.evensAndOdds(myArray)

# print(sol.incrementSeconds(myArray))

# print(sol.previousLengths(myStringArray))

# print(sol.addSevenToMost(myArray))

# print(sol.reverseArray(myArray))

# print(sol.negativeArray(myArray))

# sol.hungry(myFoodArray)

# print(sol.swapToCenter(myStringArray))

print(sol.scaleArray(myArray, 10))




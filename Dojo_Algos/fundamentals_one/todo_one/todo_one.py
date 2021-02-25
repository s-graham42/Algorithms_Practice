# Setting and Swapping
# Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

myNumber = 42
myName = "stephen"
print(myNumber)
print(myName)
temp = myNumber
myNumber = myName
myName = temp
print(myNumber)
print(myName)

# Print -52 to 1066
# Print integers from -52 to 1066 using a FOR loop.
for x in range (-52, 1067):
    print(x)

# Don’t Worry, Be Happy
# Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
def beCheerful():
    for i in range(98):
        print(str(i+1) + ": good morning!")

beCheerful()

# Multiples of Three – but Not All
# Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for i in range(-300, 1, 3):
    if i != -3 and i != -6:
        print(i)

# Printing Integers with While
# Print integers from 2000 to 5280, using a WHILE.
i = 2000
while i <= 5280:
    print(i)
    i+=1

# Leap Year
# Write a function that determines whether a given year is a leap year.
# If a year is divisible by four, it is a leap year, unless it is divisible by 100.
# However, if it is divisible by 400, then it is.
def isLeapYear(year):
    if (year % 400 == 0):
        print(f"{year} is a Leap Year!")
    elif (year % 100 == 0):
        print(f"{year} is not a leap year.")
    elif (year % 4 == 0):
        print(f"{year} is a Leap Year!")
    else:
        print(f"{year} is not a leap year.")

# Print and Count
# Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

counter = 0
for i in range(512, 4097):
    if (i % 5 == 0):
        print(i)
        counter += 1
print(f"Total: {counter}")

# Multiples of Six
# Print multiples of 6 up to 60,000, using a WHILE.
num = 6
while num < 60001:
    print(num)
    num += 6

# Counting, the Dojo Way
# Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for i in range(1, 101):
    if (i % 5 == 0) and (i % 10 == 0):
        print("Coding Dojo")
    elif (i % 5 == 0):
        print("Coding")
    else:
        print(i)

# What Do You Know?
# Your function will be given an input parameter incoming. Please console.log this value.

def printIt(incoming):
    print(incoming)

printIt("Hello World!")
printIt(42)

# Whoa, That Sucker’s Huge…
# Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
sum = 0
for i in range(-299999, 300000, 2):
    sum += i

print(sum)

# Flexible Countdown
# Based on earlier “Countdown by Fours”, given lowNum, highNum, mult,
# print multiples of mult from highNum down to lowNum, using a FOR.
# For (2,9,3), print 9 6 3 (on successive lines).
def countDown(lowNum, highNum, mult):
    for  i in range(highNum, lowNum - 1, -1):
        if (i % mult == 0):
            print(i)

countDown(2, 9, 3)
countDown(0, 49, 5)

# The Final Countdown
# This is based on “Flexible Countdown”. The parameter names are not as helpful,
# but the problem is essentially identical; don’t be thrown off! Given 4 parameters
# (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3.
# One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE.
# Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

def finalCountDown(param1, param2, param3, param4):
    for i in range(param2, param3):
        if (i % param1 == 0):
            if (i == param4):
                continue
            else:
                print(i)

finalCountDown(3, 5, 17, 9)
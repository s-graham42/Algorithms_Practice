# There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock,
# determine how many pairs of socks with matching colors there are.

# Example:
# n = 7
# ar = [1, 2, 1, 2, 1, 3, 2]
# (There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.)

# Function Description

# sockMerchant() has the following parameter(s):

# int n: the number of socks in the pile
# int ar[n]: the colors of each sock
# Returns

# int: the number of pairs

# Solutions:
# Using Collections.Counter:

import collections

def sockManager(n, ar):
    pairs = 0
    socks = collections.Counter(ar)
    for i in range(len(socks)):
        pairs += socks[i] // 2
    return pairs


print(sockManager(10, [1, 2, 3, 4, 5, 2, 1, 3, 2, 4, 1]))

# old version:

def sockManagerOld(n, ar):
    ar.sort()
    current = 0
    pairs = 0
    
    for sock in ar:
        if current == 0:
            current = sock
        elif sock == current:
            pairs += 1
            current = 0
        elif sock != current:
            current = sock
            
    return pairs

# print(sockManagerOld(10, [1, 2, 3, 4, 5, 2, 1, 3, 2, 4, 1]))
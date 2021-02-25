# https://www.interviewcake.com/question/python3/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation
# Interview Cake Solution is different.  Revisit.

def merge(my_list, alices_list):
    # define newList up front to save space from dynamic List reallocation
    newList = [None] * (len(my_list) + len(alices_list))
    myInd = 0
    aliceInd = 0
    mergeIndex = 0
    
    # walk through both lists, compare current index values, add lower value to newList
    # if values are equal, add value from alice list, (doesn't matter which one, I just chose one)
    while myInd < len(my_list) and aliceInd < len(alices_list):
        if my_list[myInd] < alices_list[aliceInd]:
            newList[mergeIndex] = (my_list[myInd])
            myInd += 1
            mergeIndex += 1
        else:
            newList[mergeIndex] = (alices_list[aliceInd])
            aliceInd += 1
            mergeIndex += 1

    #after one list has been exhausted, add the rest of whichever list has values left.
    if myInd < len(my_list):
        while myInd < len(my_list):
            newList[mergeIndex] = (my_list[myInd])
            myInd += 1
            mergeIndex += 1
    elif aliceInd < len(alices_list):
        while aliceInd < len(alices_list):
            newList[mergeIndex] = (alices_list[aliceInd])
            aliceInd += 1
            mergeIndex += 1

    return newList

# sol = Solution
myList = [3, 4, 6, 10, 11, 15]
aliceList = [10]

print(merge(myList, aliceList))
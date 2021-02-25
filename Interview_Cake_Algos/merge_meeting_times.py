# https://www.interviewcake.com/question/python3/merging-ranges?course=fc1&section=array-and-string-manipulation

class Solution:
    def merge_ranges(arr):
        arr.sort()
        start = arr[0][0]
        end = arr[0][1]
        newArr = []

        for s, e in arr:
            if s > end:
                newArr.append((start, end))
                start = s
                end = e
            elif e > end:
                end = e

        newArr.append((start, end))
        return newArr

sol = Solution
meetingTimes = [(0, 1),(3, 5),(4, 8),(10, 12),(9, 10)]

print(sol.merge_ranges(meetingTimes))


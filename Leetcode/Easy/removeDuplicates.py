import datetime
# Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

# Input: nums = [1,1,2]
# Output: 2, nums = [1,2]
# Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

# -- MY SOLUTION --

myArray = [1, 1, 2]

class Solution:
    def removeDuplicates(self, nums):
        for i in range(len(nums)-1, 0, -1):
            if nums[i] == nums[i-1]:
                nums.remove(nums[i])
        return len(nums)

myArray = [1, 1, 2] # 2
myOtherArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] # 5
test = Solution()
start = datetime.datetime.now()
print(start)
# print(test.removeDuplicates(myArray))
# print(myArray)
print(test.removeDuplicates(myOtherArray))
print(myOtherArray)
print(datetime.datetime.now() - start)

# -- THEIR SOLUTION ----

# use two pointers to iterate through the array.
# move non-dupicate elements to beginning of the array, leave the end of the array alone.
# return the length of the array that is non-duplicates so you could then slice them out if you wanted to.

# class Solution2:
#     def removeDuplicates(self, nums):
#         if len(nums) <= 1:
#             return len(nums)
#         else:
#             i = 0
#             for j in range(1, len(nums)):
#                 if nums[j] != nums[i]:
#                     i += 1
#                     nums[i] = nums[j] 
#         return i+1

# myArray = [1, 1, 2] # 2
# myOtherArray = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] # 5
# test = Solution2()
# start = datetime.datetime.now()
# print(start)
# # print(test.removeDuplicates(myArray))
# # print(myArray)
# print(test.removeDuplicates(myOtherArray))
# print(myOtherArray)
# print(datetime.datetime.now() - start)


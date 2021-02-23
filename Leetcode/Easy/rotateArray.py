class Solution:
    def rotate(self, nums, k):
        """
        Do not return anything, modify nums in-place instead.
        """
        swap = []
        j = k
        while j > 0:
            swap.append(nums[len(nums) - j])
            j -= 1
        for i in range(len(nums) - (k + 1), -1, -1):
            [nums[i], nums[i + k]] = [nums[i + k], nums[i]]
        for l in range(len(swap)):
            nums[l] = swap[l]

test = Solution()
myArray = [1,2,3,4,5,6,7]
print(test.rotate(myArray, 2))
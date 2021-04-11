# Binary Search Algorithm
# A binary search algorithm finds an item in a sorted list in O(lg(n))O(lg(n)) time.

# A brute force search would walk through the whole list, taking O(n)O(n) time in the worst case.

# Let's say we have a sorted list of numbers. To find a number with a binary search, we:

# 1.  Start with the middle number: is it bigger or smaller than our target number? Since the list is sorted,
# this tells us if the target would be in the left half or the right half of our list.
# 2.  We've effectively divided the problem in half. We can "rule out" the whole half of the list that we know
# doesn't contain the target number.
# 3.  Repeat the same approach (of starting in the middle) on the new half-size problem. Then do it again and again,
# until we either find the number or "rule out" the whole set.

def binary_search(target: int, nums: list) -> bool:
    """ Iterative version of binary search implementation """

    floor_index = -1            # EXclusive left wall around possible positions of target
    ceiling_index = len(nums)   # EXclusive right wall

    while (floor_index + 1) < ceiling_index:    # if not at least one index between floor and ceiling, we've run out of guesses.

        distance = ceiling_index - floor_index
        half_distance = distance // 2
        guess_index = floor_index + half_distance
        
        guess_value = nums[guess_index]

        if guess_value == target:
            return True

        if guess_value > target:
            ceiling_index = guess_index
        else:
            floor_index = guess_index

    return False



# find the largest palindrome in a list of integers
import unittest

class palindrome_finder:

    def is_palindrome(self, this_list):
        for i in range(len(this_list) // 2):
            if this_list[i] == this_list[len(this_list) - (1 + i)]:
                continue
            else:
                return False
        return True
    
    def check_odd_palindrome(self, theList, index):
        left = index - 1    # slice index INclusive
        right = index + 2   # slice index EXclusive
        largest_palindrome = []
        while left >= 0 and right <= len(theList):
            if self.is_palindrome(theList[left:right]):
                largest_palindrome = theList[left:right]
                left -= 1
                right += 1
            else:
                return largest_palindrome
        
        return largest_palindrome
        
    def check_even_palindrome(self, theList, index):
        left = index        # slice index INclusive
        right = index + 2   # slice index EXclusive
        largest_palindrome = []
        while left >= 0 and right <= len(theList):
            if self.is_palindrome(theList[left:right]):
                largest_palindrome = theList[left:right]
                left -= 1
                right += 1
            else:
                return largest_palindrome
        
        return largest_palindrome


    def find_largest_palindrome(self, theList):
        if len(theList) == 0:
            raise ValueError("List of values must be larger than 0 items.")
        elif len(theList) == 1:
            return [theList[0]]
        else:
            largest_palindrome = []
            for i in range(len(theList)):
                odd = self.check_odd_palindrome(theList, i)
                even = self.check_even_palindrome(theList, i)
                if len(odd) > len(even) and len(odd) > len(largest_palindrome):
                    largest_palindrome = odd
                elif len(even) > len(odd) and len(even) > len(largest_palindrome):
                    largest_palindrome = even

            if len(largest_palindrome) == 0:
                return "No Palindrome Found."
            else:
                return largest_palindrome

sol = palindrome_finder()

class Test(unittest.TestCase):

    def test_find_no_largest_palindrome(self):
        result = sol.find_largest_palindrome([1, 9, 2, 7, 4, 3, 1, 5, 7, 3, 1, 7, 4, 9])
        self.assertEqual(result, "No Palindrome Found.")

    def test_finds_largest_palindrome_early(self):
        result = sol.find_largest_palindrome([1, 2, 3, 4, 4, 3, 2, 1, 2, 7, 3, 9, 5, 6, 0, 1])
        self.assertEqual(result, [1, 2, 3, 4, 4, 3, 2, 1])

    def test_finds_largest_palindrome_late(self):
        result = sol.find_largest_palindrome([2, 7, 3, 9, 5, 6, 0, 1, 1, 2, 3, 4, 4, 3, 2, 1,])
        self.assertEqual(result, [1, 2, 3, 4, 4, 3, 2, 1])

    def test_list_with_1_item(self):
        result = sol.find_largest_palindrome([9])
        self.assertEqual(result, [9])

    def test_is_palindrome(self):
        result = sol.is_palindrome([1, 2, 3, 2, 1])
        self.assertTrue(result)

    def test_is_not_palindrome(self):
        result = sol.is_palindrome([1, 2, 3, 4, 3, 3, 1])
        self.assertFalse(result)

unittest.main(verbosity=2)
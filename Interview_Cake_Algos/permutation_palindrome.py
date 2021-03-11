# Write an efficient function that checks whether any permutation of an input string is a palindrome.

# You can assume the input string only contains lowercase letters.

# Examples:

# "civic" should return True
# "ivicc" should return True
# "civil" should return False
# "livci" should return False

# "But 'ivicc' isn't a palindrome!"
# If you had this thought, read the question again carefully.
# We're asking if any permutation of the string is a palindrome. 
import unittest

class Solution:
    # my initial solution without looking at the answer.
    def palindrome_any_permutation(self, input):
        letter_counts = {}

        for i in range(len(input)):
            if input[i] in letter_counts:
                letter_counts[input[i]] += 1
            else:
                letter_counts[input[i]] = 1
        # print("letter_counts = ", letter_counts)

        odds = 0
        evens = 0

        for letter in letter_counts:
            if letter_counts[letter] % 2 == 0:
                evens += 1
                # print("evens = ", evens)
            else:
                odds += 1
                # print("odds = ", odds)
                if odds > 1:
                    return False
        
        return True

    def has_palindrome_permutation(self, input):
        unpaired_characters = set()

        for char in input:
            if char in unpaired_characters:
                unpaired_characters.remove(char)
            else:
                unpaired_characters.add(char)
        # print("unpaired_characters: ", unpaired_characters)
        return len(unpaired_characters) <= 1



sol = Solution()

myString = "aabbccddddef"
print(sol.palindrome_any_permutation(myString))
print(sol.has_palindrome_permutation(myString))

# Tests

class Test(unittest.TestCase):

    def test_permutation_with_odd_number_of_chars(self):
        result1 = sol.palindrome_any_permutation('aabcbcd')
        result = sol.has_palindrome_permutation('aabcbcd')
        self.assertTrue(result)
        self.assertTrue(result1)

    def test_permutation_with_even_number_of_chars(self):
        result1 = sol.palindrome_any_permutation('aabccbdd')
        result = sol.has_palindrome_permutation('aabccbdd')
        self.assertTrue(result)
        self.assertTrue(result1)

    def test_no_permutation_with_odd_number_of_chars(self):
        result1 = sol.palindrome_any_permutation('aabcd')
        result = sol.has_palindrome_permutation('aabcd')
        self.assertFalse(result)
        self.assertFalse(result1)

    def test_no_permutation_with_even_number_of_chars(self):
        result1 = sol.palindrome_any_permutation('aabbcd')
        result = sol.has_palindrome_permutation('aabbcd')
        self.assertFalse(result)
        self.assertFalse(result1)

    def test_empty_string(self):
        result1 = sol.palindrome_any_permutation('')
        result = sol.has_palindrome_permutation('')
        self.assertTrue(result)
        self.assertTrue(result1)


    def test_one_character_string(self):
        result1 = sol.palindrome_any_permutation('a')
        result = sol.has_palindrome_permutation('a')
        self.assertTrue(result)
        self.assertTrue(result1)


unittest.main(verbosity=2)


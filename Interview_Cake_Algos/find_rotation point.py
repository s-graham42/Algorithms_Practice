# I want to learn some big words so people think I'm smart.

# I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know.
# I put each word I didn't know at increasing indices in a huge list I created in memory. When I reached the end of the dictionary,
# I started from the beginning and did the same thing until I reached the page I started at.

# Now I have a list of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end,
# and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered list that has been "rotated."

# For example:

#   words = [
#     'ptolemaic',
#     'retrograde',
#     'supplant',
#     'undulate',
#     'xenoepist',
#     'asymptote',  # <-- rotates here!
#     'babka',
#     'banoffee',
#     'engender',
#     'karpatka',
#     'othellolagkage',
# ]

# Python 3.6
# Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary.
# This list is huge (there are lots of words I don't know) so we want to be efficient here.

# To keep things simple, you can assume all words are lowercase.

import unittest

def find_rotation_point(word_list):

    if len(word_list) < 1:
        raise ValueError("List Empty.")
    elif len(word_list) == 1:
        return 0

    # efficiently find the index where word_list[i] < word_list[i - 1]
    first_item = word_list[0]
    left_ind = 0 
    right_ind = len(word_list) - 1

    if word_list[left_ind] < word_list[right_ind]:
        return 0

    while left_ind < right_ind:
        guess_ind = left_ind + ((right_ind - left_ind) // 2)

        if word_list[guess_ind] >= first_item:
            left_ind = guess_ind
        else:
            right_ind = guess_ind
    
        if left_ind + 1 == right_ind:
            return right_ind

    return -1


class RotationPointTest(unittest.TestCase):

    def test_char_list(self):
        result = find_rotation_point(['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'a', 'b', 'c', 'd', 'e', 'f'])
        self.assertEqual(result, 10)

    def test_word_list(self):
        result = find_rotation_point(['ptolemaic', 'retrograde', 'supplant', 'undulate', 'xenoepist', 'asymptote', 'babka', 'banoffee', 'engender', 'karpatka', 'othellolagkage'])
        self.assertEqual(result, 5)

    def test_empty_list(self):
        self.assertRaises(ValueError, find_rotation_point, [])

    def test_one_list_item(self):
        result = find_rotation_point(['g'])
        self.assertEqual(result, 0)
    
    def test_two_list_items_sorted(self):
        result = find_rotation_point(['g', 'm'])
        self.assertEqual(result, 0)

    def test_two_list_items_unsorted(self):
        result = find_rotation_point(['g', 'a'])
        self.assertEqual(result, 1)

    def test_three_list_items(self):
        result = find_rotation_point(['g', 'm', 'a'])
        self.assertEqual(result, 2)

unittest.main(verbosity = 2)

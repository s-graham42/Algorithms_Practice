import unittest

""" USES LIST SLICING TO ROTATE ARRAY LEFT.  

    a:  List of integers.
    d:  number of places to shift array left

    methodology: grab the end of the list from d (inclusive)
        concatenate that with the beginning of the list up to d (exclusive).

    if a is empty or only one element or if d is < 1, just return a.

    O(n) time.
"""
def rotLeft(a: list, d: int) -> list:
    if a and len(a) > 1 and d > 0:
        d = d % len(a)
        a = a[d:] + a[:d]

    return a



myArr = [1, 2, 3, 4, 5]
# print(rotLeftOnce(myArr))

# print(rotLeft(myArr, 7))

class LeftRotationTest(unittest.TestCase):

    def test_happy_case(self):
        self.assertEqual([4, 5, 1, 2, 3], rotLeft([1, 2, 3, 4, 5], 3))

    def test_empty_list(self):
        self.assertEqual([], rotLeft([], 4))

    def test_no_rotations(self):
        self.assertEqual([1, 2, 3, 4, 5], rotLeft([1, 2, 3, 4, 5], 0))


unittest.main(verbosity=2)
# Given a list of integers, find the highest product you can get from three of the integers.

# The input list_of_ints will always have at least three integers.

import unittest
def highest_product_of_3(arr):
    """function to find the highest product of 3 integers from a list"""

    highest = max(arr[0], arr[1])
    lowest = min(arr[0], arr[1])
    highest_prod_of_2 = arr[0] * arr[1]
    lowest_prod_of_2 = arr[0] * arr[1]
    highest_prod_of_3 = arr[0] * arr[1] * arr[2]

    for i in range(2, len(arr)):
        current = arr[i]
        highest_prod_of_3 = max(highest_prod_of_3, highest_prod_of_2 * current, lowest_prod_of_2 * current)
        lowest_prod_of_2 = min(lowest_prod_of_2, lowest * current, highest * current)
        highest_prod_of_2 = max(highest_prod_of_2, highest * current, lowest * current)
        lowest = min(lowest, current)
        highest = max(highest, current)

    return highest_prod_of_3

class Highest_Product_Test(unittest.TestCase):
    def test_hpo3_all_positive(self):
        self.assertEqual(24, highest_product_of_3([1, 2, 3, 4]))

    def test_hpo3_pos_and_neg(self):
        self.assertEqual(600, highest_product_of_3([-100, -1, 4, 5, 6]))
        self.assertEqual(600, highest_product_of_3([4, -1, 5, -100, 6]))



unittest.main(verbosity=2)

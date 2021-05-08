import unittest

def check_hourglass(arr, x, y):
    hourglass = []
    for i in range(3):
        hourglass.append(arr[x][y+i])
    hourglass.append(arr[x+1][y+1])
    for i in range(3):
        hourglass.append(arr[x+2][y+i])
    return sum(hourglass)

def hourglassSum(arr):
    """takes a 6 x 6 array, and finds the maximum sum of a 3, 1, 3 hourglass. """
    sums = []
    for i in range(4):
        for j in range(4):
            sums.append(check_hourglass(arr, i, j))
    # print(f"final sums array: {sums}")
    return max(sums)


myArray = [
    [1, 2, 1, 2, 1, 2],
    [0, 1, 0, 1, 0, 1],
    [1, 2, 1, 2, 1, 2],
    [0, 1, 0, 1, 0, 1],
    [1, 2, 1, 2, 1, 2],
    [0, 1, 0, 1, 0, 1]
]

# print(myArray)
# print(check_hourglass(myArray, 0, 0))
# print(hourglassSum(myArray))


class Hourglass_test(unittest.TestCase):
    myArr = [
        [1, 2, 1, 2, 1, 2],
        [0, 1, 0, 1, 0, 1],
        [1, 2, 1, 2, 1, 2],
        [0, 1, 0, 1, 0, 1],
        [1, 2, 1, 2, 1, 2],
        [0, 1, 0, 1, 0, 1]
    ]
    all_zeroes = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]
    hacker_rank_0 = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ]

    def test_first_hourglass(self):
        self.assertEqual(9, check_hourglass(self.myArr, 0, 0))
    
    def test_last_hourglass(self):
        self.assertEqual(5, check_hourglass(self.myArr, 3, 3))

    def test_myArr(self):
        self.assertEqual(10, hourglassSum(self.myArr))
    
    def test_all_zeroes(self):
        self.assertEqual(0, hourglassSum(self.all_zeroes))

    def test_all_zeroes(self):
        self.assertEqual(19, hourglassSum(self.hacker_rank_0))
    


unittest.main(verbosity=2)
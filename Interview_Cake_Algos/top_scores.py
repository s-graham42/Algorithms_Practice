# You created a game that is more popular than Angry Birds.

# Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest.
# So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that
# their rankings aren't updated fast enough. You need a faster sorting algorithm.

# Write a function that takes:

# 1. a list of unsorted_scores
# 2. the highest_possible_score in the game

# and returns a sorted list of scores in less than O(n\lg{n})O(nlgn) time.

# For example:

# unsorted_scores = [37, 89, 41, 65, 91, 53]
# HIGHEST_POSSIBLE_SCORE = 100

# # Returns [91, 89, 65, 53, 41, 37]
# sort_scores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)

# Python 3.6
# We’re defining n as the number of unsorted_scores because we’re expecting the number of players to keep climbing.

# And, we'll treat highest_possible_score as a constant instead of factoring it into our big O time and
# space costs because the highest possible score isn’t going to change. Even if we do redesign the game a little,
# the scores will stay around the same order of magnitude.

import unittest

def sort_scores(unsorted_scores, highest_possible_score):

    sorted_scores = []
    score_count = [0] * (highest_possible_score + 1)
    for score in unsorted_scores:
        score_count[score] += 1

    for score, count in reversed(list(enumerate(score_count))):
        if count > 0:
            for i in range(count):
                sorted_scores.append(score)

    return sorted_scores



class TopScoresTest(unittest.TestCase):

    def test_happy_case(self):
        result = sort_scores([37, 89, 41, 65, 91, 53], 100)
        self.assertEqual(result, [91, 89, 65, 53, 41, 37])
    
    def test_some_identical_scores(self):
        result = sort_scores([22, 87, 44, 56, 87, 23, 22, 87, 99, 100, 22, 22, 55] , 100)
        self.assertEqual(result, [100, 99, 87, 87, 87, 56, 55, 44, 23, 22, 22, 22, 22])

    def test_empty_list(self):
        result = sort_scores([], 100)
        self.assertEqual(result, [])

unittest.main(verbosity=2)
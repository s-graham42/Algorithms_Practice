# Write a function for doing an in-place ↴ shuffle of a list.
# The shuffle must be "uniform," meaning each item in the original list must have the same probability of ending up in each spot in the final list.
# Assume that you have a function get_random(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

# Fisher-Yates or Durstenfeld algorithm

import random

def get_random(floor, ceiling):
    return random.randrange(floor, ceiling + 1)

def shuffle(the_list):
    # shuffle list in place.
    # Fisher-Yates / Durstenfeld algorithm
    # (often back to front.  Below is front to back.)

    last_index = len(the_list) - 1

    for i in range(last_index):
        swap = get_random(i, last_index)

        if i != swap:
            the_list[i], the_list[swap] = the_list[swap], the_list[i]


    return the_list


myList = [1, 2, 3, 4, 5, 6, 7]
print(shuffle(myList))
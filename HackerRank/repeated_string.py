import timeit

def find_a(s: str) -> int:
    """ finds the letter 'a' in a provided string and returns the total occurances (int)"""

    result = 0
    for char in s:
        if char == "a":
            result += 1
    return result

def repeatedString(s, n):
    """ assumes provided string s(str) repeats infinitely.  finds the total occurances
        of the letter 'a' in n(int) number of characters"""
    total_a = 0
    string_length = len(s)
    # if n is less than the length of the string, just check that slice.
    if n <= string_length:
        return find_a(s[:n])
    else:
        full_repeats = n // string_length
        remainder = n % string_length
        total_a += find_a(s) * full_repeats
        total_a += find_a(s[:remainder])
        return total_a


myStr = "ababb"

timeit.timeit('print(repeatedString(myStr, 28))')
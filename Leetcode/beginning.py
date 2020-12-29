# Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

# Follow up: Could you solve it without converting the integer to a string?

class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Special cases:
        # As discussed above, when x < 0, x is not a palindrome.
        # Also if the last digit of the number is 0, in order to be a palindrome,
        # the first digit of the number also needs to be 0.
        # Only 0 satisfy this property.
        if x < 0 or (x != 0 and x % 10 == 0):
            return False
        else:
            revertedNumber = 0
            while x > revertedNumber:
                revertedNumber = (revertedNumber * 10) + (x % 10)
                x = int(x / 10)
                print(f"x: {x}, revertedNumber: {revertedNumber}")
            # When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
            # For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
            # since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
            return x == revertedNumber or x == int(revertedNumber / 10)

gary = Solution()
print(gary.isPalindrome(-7567657))
print(gary.isPalindrome(76587520))

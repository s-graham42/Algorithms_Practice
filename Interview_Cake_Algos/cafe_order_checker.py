# My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

# I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe.
# All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

# Recently, some customers have been complaining that people who placed orders after them are getting their food first.
# Yikes—that's not good for business!

# To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

# The take-out orders as they were entered into the system and given to the kitchen. (take_out_orders)
# The dine-in orders as they were entered into the system and given to the kitchen. (dine_in_orders)
# Each customer order (from either register) as it was finished by the kitchen. (served_orders)
# Given all three lists, write a function to check that my service is first-come, first-served.
# All food should come out in the same order customers requested it.

# We'll represent each customer order as a unique integer.

# As an example,
#     Take Out Orders: [1, 3, 5]
#     Dine In Orders: [2, 4, 6]
#     Served Orders: [1, 2, 4, 6, 5, 3]
# would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

# But,

#     Take Out Orders: [17, 8, 24]
#     Dine In Orders: [12, 19, 2]
#     Served Orders: [17, 8, 12, 19, 24, 2]
# would be first-come, first-served.

# Note: Order numbers are arbitrary. They do not have to be in increasing order.
def cafe_checker(takeOut, dineIn, served):
    """
    Checks served orders to make sure they are served in the order they were ordered.
    
    Parameters:
    takeOut (list of integers): represents orders made at the take-out register.  integer value doesn't matter, but order in the list matters.
    dineIn (list of integers): represents orders made at the dine in register.  integer value doesn't matter, but order in the list matters.
    served (list of integers): represents all orders in the order they were delivered

    returns:
    Boolean:  True if no order from served in takeOut occurs before a later order in takeout AND no order from served in dineIn occurs before another order in dineIn.
    """
    if (len(takeOut) < 1 and dineIn == served) or (len(dineIn) < 1 and takeOut == served):
        return True
    elif (len(served) != len(takeOut) + len(dineIn)):
        return False
    elif (len(takeOut) < 1 and dineIn != served) or (len(dineIn) < 1 and takeOut != served):
        return False

    takeOutInd = 0
    dineInInd = 0
    for i in served:
        if takeOutInd < len(takeOut) and i == takeOut[takeOutInd]:
            takeOutInd += 1
        elif dineInInd < len(dineIn) and i == dineIn[dineInInd]:
            dineInInd += 1
        else:
            return False
    return True



import unittest

class cafe_checker_test(unittest.TestCase):
    def test_happy_case(self):
        to = [17, 8, 24]
        di = [12, 19, 2]
        served = [17, 8, 12, 19, 24, 2]
        result = cafe_checker(to, di, served)
        self.assertTrue(result)

    def test_sad_case(self):
        to = [1, 3, 5]
        di = [2, 4, 6]
        served = [1, 2, 4, 6, 5, 3]
        result = cafe_checker(to, di, served)
        self.assertFalse(result)
    
    def test_both_registers_have_same_number_of_orders(self):
        result = cafe_checker([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6])
        self.assertTrue(result)

    def test_registers_have_different_lengths(self):
        result = cafe_checker([1, 5], [2, 3, 6], [1, 2, 6, 3, 5])
        self.assertFalse(result)

    def test_one_register_is_empty(self):
        result = cafe_checker([], [2, 3, 6], [2, 3, 6])
        self.assertTrue(result)

    def test_served_orders_is_missing_orders(self):
        result = cafe_checker([1, 5], [2, 3, 6], [1, 6, 3, 5])
        self.assertFalse(result)

    def test_served_orders_has_extra_orders(self):
        result = cafe_checker([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8])
        self.assertFalse(result)

    def test_one_register_has_extra_orders(self):
        result = cafe_checker([1, 9], [7, 8], [1, 7, 8])
        self.assertFalse(result)

    def test_one_register_has_unserved_orders(self):
        result = cafe_checker([55, 9], [7, 8], [1, 7, 8, 9])
        self.assertFalse(result)

    def test_order_numbers_are_not_sequential(self):
        result = cafe_checker([27, 12, 18], [55, 31, 8], [55, 31, 8, 27, 12, 18])
        self.assertTrue(result)

unittest.main(verbosity = 2)
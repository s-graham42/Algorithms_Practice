# You have a list of integers, and for each index you want to find the product of every integer
# except the integer at that index.

# Write a function get_products_of_all_ints_except_at_index() that takes a list of integers
# and returns a list of the products.
# input_list: [3, 1, 2, 5, 6, 4]

def get_products_of_all_ints_except_at_index(int_list):
    befores = [None] * len(int_list)
    befores[0] = 1
    afters = [None] * len(int_list)
    afters[len(int_list) -1] = 1
    products = [None] * len(int_list)
    # create list of befores
    for i in range(1, len(int_list)):
        befores[i] =(int_list[i-1] * befores[i-1])
    # create list of afters
    for i in range(len(int_list) - 2, -1, -1):
        afters[i] =(int_list[i+1] * afters[i+1])
    
    for i in range(len(products)):
        if i == 0:
            products[i] = afters[i]
        elif i == len(products) - 1:
            products[i] = befores[i]
        else:
            products[i] = afters[i] * befores[i]

    return products

# Can we do it with only one new list?
def get_another_products_of_all_ints_except_at_index(int_list):
    if len(int_list) < 2:
        raise IndexError('Needs at least 2 numbers')

    products = [None] * len(int_list)
    products[len(int_list) -1] = 1

    # create list of afters
    for i in range(len(int_list) - 2, -1, -1):
        products[i] =(int_list[i+1] * products[i+1])

    products_before_index = 1
    for i in range(len(products)):
        if i == 0:
            products_before_index = int_list[i] * products_before_index
        else:
            products[i] = products[i] * products_before_index
            products_before_index = products_before_index * int_list[i]

    return products



print(get_another_products_of_all_ints_except_at_index([1, 7, 3, 4]))
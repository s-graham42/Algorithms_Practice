# Word Cloud

# You want to build a word cloud, an infographic where the size of a word corresponds to how often it
# appears in the body of text.

# To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a
# dictionary ↴ , where the keys are words and the values are the number of times the words occurred.

# Think about capitalized words. For example, look at these sentences:
# 'After beating the eggs, Dana read the next step:'
# 'Add milk and eggs, then add flour and sugar.'

# What do we want to do with "After", "Dana", and "add"? In this example, your final dictionary
# should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect)
# decisions about cases like "After" and "Dana".

# Assume the input will only contain words and standard punctuation.

import unittest

# attempt #1:
# def get_word_cloud(paragraph: str) -> dict:
#     all_punctuation = [".", "!", "?", ",", ";", ":"]
#     end_punctuation = [".", "!", "?"]
#     last_punctuation = "."

#     words_list = paragraph.split(" ")

#     words_dict = {}

#     for word in words_list:
#         if word == "":
#             continue
#         if word[0].isupper():
#             if last_punctuation in end_punctuation:
#                 word = word.lower()
#         if word[len(word) - 1] in all_punctuation:
#             last_punctuation = word[len(word) - 1]
#             word = word[:-1]
        
#         if word in words_dict:
#             words_dict[word] += 1
#         else:
#             words_dict[word] = 1

#     return words_dict

# myParagraph = "After beating the eggs, Dana read the next step.  Add milk and eggs, then add flour and sugar."

# print(get_word_cloud(myParagraph))

def split_paragraph(paragraph: str) -> list:
    words_list = []
    new_word = ""

    for i in range(len(paragraph)):
        if paragraph[i].isalpha()
            new_word += i
        else:
            words_list

def get_word_cloud2(paragraph: str) -> dict:
    words_dict = {}

    words_list = []
# Given a list [("name", "Elie"), ("job", "Instructor")], create a dictionary that looks like this {'job': 'Instructor', 'name': 'Elie'} (the order does not matter).
random_list = [("name", "Elie"), ("job", "Instructor")]

print({random_list[i][0] : random_list[i][1] for i in range(0, len(random_list))})


# Given two lists ["CA", "NJ", "RI"] and ["California", "New Jersey", "Rhode Island"] return a dictionary that looks like this {'CA': 'California', 'NJ': 'New Jersey', 'RI': 'Rhode Island'}. You can research the zip method to help you.

abbreviation_place = ["CA", "NJ", "RI"]
place = ["California", "New Jersey", "Rhode Island"]

print({ abbreviation_place[i] : place[i] for i in range(0, len(abbreviation_place))})


# Create a dictionary with the key as a vowel in the alphabet and the value as 0. Your dictionary should look like this {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}. (Do not use the fromkeys method).
print({vowels : 0 for vowels in 'aeiou'})

# Create a dictionary starting with the key of the position of the letter and the value as the letter in the alphabet. You should return something like this (Hint - use chr(65) to get the first letter):
# -----------solution 1
# count = 0
# alphabet_dictionary = {}

# for idx, alphabet in enumerate(range(65, 91)):
#     alphabet_dictionary[chr(alphabet)] = idx+1
# print(alphabet_dictionary)

# ----------solution 2

print({chr(alphabet): idx+1 for idx, alphabet in enumerate(range(65, 92))})


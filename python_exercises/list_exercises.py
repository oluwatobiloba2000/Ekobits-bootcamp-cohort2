# Given a list [1,2,3,4], print out all the values in the list
li = [1, 2, 3, 4]

for single_li in li:
    print(single_li)

# Given a list [1,2,3,4], print out all the values in the list multiplied by 20.

for multiply_single_li in li:
    print(multiply_single_li * 20)

# Given a list ["Elie", "Tim", "Matt"], return a new list with only the first letter (["E", "T", "M"]).
names = ["Elie", "Tim", "Matt"]
print([name[0] for name in names])

# Given a list [1,2,3,4,5,6] return a new list of all the even values ([2,4,6]).
numbers = [1,2,3,4,5,6]
print('even numbers', [num for num in numbers if num % 2 == 0])

# Given a list of words ["Elie", "Tim", "Matt"] return a new list with each word reversed and in lower case (['eile', 'mit', 'ttam']).
upper_words = ["Elie", "Tim", "Matt"]
print([word.lower()[::-1] for word in upper_words])

# Given two strings "first" and "third", return a new string with all the letters present in both words (["i", "r", "t"]).
first_var = 'first'
second_var = 'third'

print([ first_letter for first_letter in first_var for second_letter in second_var if first_letter == second_letter])

# For all the numbers between 1 and 100, return a list with all the numbers that are divisible by 12 ([12, 24, 36, 48, 60, 72, 84, 96])
print([ number for number in range(1, 100) if number % 12 == 0])




# Given the string "amazing", return a list with all the vowels removed (['m', 'z', 'n', 'g'])
string_word = 'amazing'
print([letter_in_string for letter_in_string in string_word if letter_in_string not in ['a', 'e', 'i', 'o', 'u'] ])

i = 0
number_first_list = []
while i < 3:
    number_first_list.append([single_list for  single_list in range(0, 3)])
    i += 1
print(number_first_list)

i = 0
number_second_list = []
while i <= 10:
    number_second_list.append([single_list for single_list in range(0, 10)])
    i += 1
print(number_second_list)
# generated_list = [single_list while  single_list in range(0, 3)]
# print(generated_list)
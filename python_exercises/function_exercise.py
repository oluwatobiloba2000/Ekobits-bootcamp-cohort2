def expect(ans = None):

    def test(function):
       print(f"expect answer to be {ans} and got =>", function)
       if ans == function:
          print(f"Test passed")
       else:
          print('test failed')
    return test


# this function takes in two parameters and returns the difference between the two

def difference(a, b):
    return a - b
expect(0)(difference(2,2)) # 0
expect(-2)(difference(0,2)) # -2

# this function takes in two parameters and returns the product of the two
def product(a, b):
    return a * b
expect(4)(product(2,2)) # 4
expect(0)(product(0,2)) # 0


# this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return None
def print_day(num):
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if num >= 1 and num <= 7:
       return days[num - 1]
    else:
        return None

expect("Wednesday")(print_day(4)) # "Wednesday"
expect(None)(print_day(41)) # None

# this function takes in one parameter (a list) and returns the last value in the list. It should return None if the list is empty.
def last_element(list_param):
    if len(list_param):
        return list_param[len(list_param) - 1]
    else:
        return None

expect(4)(last_element([1,2,3,4]))
expect(None)(last_element([]))

# number_compare
def number_compare(num1, num2):
    if num1 > num2:
       return 'First is greater'
    elif num2 > num1:
       return 'Second is greater'
    else:
       return 'Numbers are equal'

expect("Numbers are equal")(number_compare(1,1))
expect("Second is greater")(number_compare(1,2))
expect("First is greater")(number_compare(2,1))

# single_letter_count


def single_letter_count(string, letter):
    count = 0
    for singleLetter in string:
        if singleLetter.lower() == letter.lower():
            count += 1
    return count

expect(2)(single_letter_count('amazing','a'))

def multiple_letter_count(string):
    letter_dictionary = {}
    for letter in string:
        if letter_dictionary.get(letter):
            letter_dictionary[letter] += 1
        else:
            letter_dictionary[letter] = 1
    return letter_dictionary

expect({'h': 1, 'e': 1, 'l': 2, 'o': 1})(multiple_letter_count("hello"))
expect({'p':1, 'e': 1, 'r': 1, 's':1, 'o':1, 'n':1})(multiple_letter_count("person"))


def list_manipulation(_list, command, location, value = None):
    if command.lower() == 'remove' and location.lower() == 'end':
        return _list.pop()
    elif command.lower() == 'remove' and location.lower() == 'beginning':
        return _list.pop(0)
    elif command.lower() == 'add' and location.lower() == 'beginning':
        _list.insert(0, value)
        return _list
    elif command.lower() == 'add' and location.lower() == 'end':
        _list.append(value)
        return _list

expect(3)(list_manipulation([1,2,3], "remove", "end"))
expect(1)(list_manipulation([1,2,3], "remove", "beginning"))
expect([20, 1, 2, 3])(list_manipulation([1,2,3], "add", "beginning", 20))
expect([1, 2, 3, 30])(list_manipulation([1,2,3], "add", "end", 30))

def is_palindrome(string):
    converted_str_list = list(string)

    copy = converted_str_list.copy();
    copy.reverse()
    if converted_str_list == copy:
        return True
    else:
        return False

expect(False)(is_palindrome('testing'))
expect(True)(is_palindrome('tacocat'))
expect(True)(is_palindrome('hannah'))
expect(False)(is_palindrome('robert'))

def frequency(li, search_term):
    count = 0
    for single_li in li:
        if single_li == search_term:
            count += 1

    return count

expect(3)(frequency([1,2,3,4,4,4], 4))
expect(1)(frequency([True, False, True, True], False))

def flip_case(string, str_case):
    string_flipped = []
    for single_string in string:
        new_single_str = single_string.lower()
        if new_single_str == str_case.lower():
            if single_string.isupper():
              string_flipped.append(single_string.lower())
            elif single_string.islower():
              string_flipped.append(single_string.upper())
        else:
            string_flipped.append(single_string)
    return ''.join(string_flipped)

expect("hardy Har Har")(flip_case("Hardy har har", "h"))


def multiply_even_numbers(num_list):
    total  = None
    for num in num_list:
        if num % 2 == 0:
            if total:
               total =  num * total
            else:
                total = num
    return total

expect(48)(multiply_even_numbers([2,3,4,5,6]))

# def mode(num_list):
#     count = {}
#     for num in num_list:
#         if count.get(num):

def capitalize(string):
    return string.capitalize()

expect('Tim')(capitalize("tim"))
expect('Matt')(capitalize("matt"))

def compact(_lists):
    truty_lists = []
    for single_list in _lists:
        if single_list:
            truty_lists.append(single_list)
    return truty_lists

expect([1,2, "All done"])(compact([0,1,2,"",[], False, {}, None, "All done"]))


def partition(_lists, Fn):
    truty_lists = []
    falsy_lists = []
    for single_list in _lists:
        if Fn(single_list):
           truty_lists.append(single_list)
        else:
            falsy_lists.append(single_list)
    return [truty_lists, falsy_lists]

def is_even(num):
    return num % 2 == 0

expect([[2,4],[1,3]])(partition([1,2,3,4], is_even))

def intersection(first_dimension_list, second_dimension_list):
        acc_list = []
        for first_list in first_dimension_list:
            for second_list in second_dimension_list:
                if first_list == second_list:
                    acc_list.append(first_list)
        return acc_list


expect([2,3])(intersection([1,2 ,3], [2,3,4]))

# def run_once(Fn):
#     has_ran = False
#     def once():
#         if has_ran == False:
#             has_ran = True
#             return Fn
#         else:
#             return None

# def add(a,b):
#     return a + b
    
# expect(4)(run_once(add(2,2)))
# expect(None)(run_once(add(3, 3)))
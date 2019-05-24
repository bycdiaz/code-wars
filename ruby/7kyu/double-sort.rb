# Simple enough this one - you will be given an array. 
# The values in the array will either be numbers or strings, 
# or a mix of both. You will not get an empty array, nor 
# a sparse one.

# Your job is to return a single array that has first the 
# numbers sorted in ascending order, followed by the strings 
# sorted in alphabetic order. The values must maintain their 
# original type.

# Note that numbers written as strings are strings and must 
# be sorted with the other strings.

# original solution
def db_sort(arr)
  numbers = []
  strings = []

  arr.each { |item| 
    if item.is_a? String
      strings << item
    else
      numbers << item
    end
  }
  (numbers.sort) + (strings.sort)
end

# refactor attempt
# def db_sort(arr)
#   numbers = []
#   strings = []

#   arr.each { |item| 
#     item.is_a? String ? strings << item : numbers << item
#   }
#   (numbers.sort) + (strings.sort)
# end

p db_sort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])
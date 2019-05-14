# Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

# Return your answer as a number.

def sum_mix(x)
  integer_array = x.map { |item| item.to_i}
  integer_array.reduce { |sum, number| sum + number }
end

p sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7])
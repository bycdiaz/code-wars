# Complete the function which takes two arguments and returns 
# all numbers which are divisible by the given divisor. First 
# argument is an array of numbers and the second is the divisor.

# Example
# divisible_by([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

# my initial solution
def divisible_by(numbers, divisor)
  numbers.select { |item| item % divisor == 0}
end

p divisible_by([1, 2, 3, 4, 5, 6], 2)
# should return [2, 4, 6]
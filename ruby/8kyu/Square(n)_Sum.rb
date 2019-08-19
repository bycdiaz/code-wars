# Complete the square sum function so that it squares each number passed into it and then sums the results together.

# For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

# initial attempt
# def squareSum(numbers)
#   altered_array = []
#   numbers.map { |num| altered_array << num ** 2}
#   altered_array.reduce(:+)
# end

# solution
def squareSum(numbers)
  numbers == [] ? 0 : numbers.map { |num| num ** 2}.reduce(:+)
end

p squareSum([1, 2, 2])
# 9
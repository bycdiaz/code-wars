# Your task is to create a function that does four basic mathematical operations.

# The function should take three arguments - operation(string/char), value1(number), value2(number).
# The function should return result of numbers after applying the chosen operation.

# Examples:

# basic_op('+', 4, 7)         # Output: 11
# basic_op('-', 15, 18)       # Output: -3
# basic_op('*', 5, 5)         # Output: 25
# basic_op('/', 49, 7)        # Output: 7s

# my initial solution
# def basic_op(operator, value1, value2)
#   case operator
#   when "+"
#     value1 + value2
#   when "-"
#     value1 - value2
#   when "*"
#     value1 * value2
#   when "/"
#     value1 / value2
#   end
# end

# top solution from codewars
def basic_op(operator, value1, value2)
  value1.send(operator, value2)
end

puts basic_op('+', 4, 7)         # Output: 11
puts basic_op('-', 15, 18)       # Output: -3
puts basic_op('*', 5, 5)         # Output: 25
puts basic_op('/', 49, 7)        # Output: 7s


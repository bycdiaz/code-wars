# Write a function named sumDigits which takes a number as input and returns the sum 
# of the absolute value of each of the number's decimal digits. For example:

#   sumDigits 10    # Returns 1
#   sumDigits 99    # Returns 18
#   sumDigits -32   # Returns 5
# Let's assume that all numbers in the input will be integer values.

# my initial solution
# def sumDigits(number)
#   new_array = (number.abs).to_s.split("").map { |item| item.to_i }
#   new_array.reduce(:+)
# end

# refactor
def sumDigits(number)
  (number.abs).to_s.split("").map { |item| item.to_i }.reduce(:+)
end
p sumDigits(-32)

# def sumDigits(number)
#   number.to_s.chars.map(&:to_i).reduce(:+)
# end
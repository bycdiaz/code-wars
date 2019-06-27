# Basic regex tasks. Write a function that takes in a numeric code of any length. 
# The function should check if the code begins with 1, 2, or 3 and return true if 
# so. Return false otherwise.

# You can assume the input will always be a number.

# my initial solution
# def validate_code(code)
#   if /^[1-3]/.match(code.to_s) == nil
#     false
#   else
#     true
#   end
# end

# refactored
def validate_code(code)
  /^[1-3]/.match(code.to_s) != nil
end

puts validate_code(91459845983459)


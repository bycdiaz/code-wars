# Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

# Note: in C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.

# My initial solution
# def problem(x)
#   if x.is_a? Numeric
#     (x.to_f * 50) + 6
#   else
#     "Error"
#   end
# end

puts problem("hello")
puts problem(5)
# Create a function that takes a string and an integer (n).

# The function should return a string that repeats the input string n number of times.

# If anything other than a string is passed in you should return "Not a string"
# Example

# "Hi", 2 --> "HiHi"
# 1234, 5 --> "Not a string"

# my initial solution
# def repeat_it(string,n)
#   if string.is_a? String
#     string * n
#   else
#   "Not a string"
#   end
# end

# refactored
def repeat_it(string,n)
  string.is_a?(String) ? string * n : "Not a string"
end

puts repeat_it("Hello", 5)
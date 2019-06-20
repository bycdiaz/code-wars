# I will give you an integer. Give me back a shape that is as long and wide as the integer. 
# The integer will be a whole number between 0 and 50.

# Example
# n = 3, so I expect a 3x3 square back just like below as a string:

# +++
# +++
# +++

def generate_shape(n)
  ("#{"+" * n}\n" * n)
end

puts generate_shape(12)
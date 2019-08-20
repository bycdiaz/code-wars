# write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

# the string should start with a 1.

# a string with size 6 should return :'101010'.

# with size 4 should return : '1010'.

# with size 12 should return : '101010101010'.

# The size will always be positive and will only use whole numbers.


# initial attempt
# def stringy(size)
#   "10" * size
# end

# puts stringy(1)

# 2nd attempt

def stringy(size)
  ("10" * size)[0...size]
end

p stringy(3)
# '101'

# p stringy(5)
# '10101'

# p stringy(12)
# '101010101010'

# p stringy(26)
# '10101010101010101010101010'

# p stringy(28)
# '1010101010101010101010101010'
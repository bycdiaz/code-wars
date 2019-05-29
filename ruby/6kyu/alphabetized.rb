# Re-order the characters of a string, so that they are concatenated 
# into a new string in 
# "case-insensitively-alphabetical-order-of-appearance" order. 
# Whitespace and punctuation shall simply be removed!

# The input is restricted to contain no numerals and only words 
# containing the english alphabet letters.

# Example:

# alphabetized("The Holy Bible") # "BbeehHilloTy"

# initial solution
def alphabetized(s)
  s.gsub(/([^A-Za-z])/, '').chars.sort(&:casecmp).join.lstrip
end

# p alphabetized("A b B a")
p alphabetized("!@$%^&*()_+=-`,")
# Your task is very simple. Just write a function isAlphabetic(s), which takes an input string s 
# in lowercase and returns true/false depending on whether the string is in alphabetical order 
# or not.

# For example, isAlphabetic('kata') is False as 'a' comes after 'k', but isAlphabetic('ant') 
# is True.

# my initial solution
# def alphabetic(s)
#   sorted = s.split("").sort.join("")
#   s == sorted
# end

# refactored
def alphabetic(s)
  s == s.split("").sort.join("")
end

p alphabetic('door')
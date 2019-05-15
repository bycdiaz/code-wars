# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

# original answer
def bool_to_word bool
  if bool == true
    "Yes"
  else
    "false"
  end
end

# refactored

def bool_to_word(bool)
  bool ? "Yes" : "No"
end
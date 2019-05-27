# Given a string, write a function that returns the string with a question mark ("?") 
# appends to the end, unless the original string ends with a question mark, in which 
# case, returns the original string.

#   ensure_question("Yes") # => "Yes?" 
#   ensure_question("No?") # => "No?"

# initial solution
def ensure_question(s)
  if s.end_with?("?")
    s
  else
    "#{s}?"
  end
end

# refactored
def ensure_question(s)
  s.end_with?("?") ? s : "#{s}?"
end
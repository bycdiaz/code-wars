# You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these 
# strings is "worth" more, and return it.

# A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string 
# HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

# In the event of a tie, you should return the first string, i.e. a.

# my initial solution
def highest_value(a, b)
  a_values = []
  a.split("").each { |char| a_values << char.ord }
  a_values = a_values.reduce(:+)

  b_values = []
  b.split("").each { |char| b_values << char.ord }
  b_values = b_values.reduce(:+)

  if a_values >= b_values
    a
  else b_values > a_values
    b
  end
end


p highest_value("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567")
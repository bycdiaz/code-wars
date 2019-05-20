# In this kata, you will do addition and subtraction on a given string. 
# The return value must be also a string.

# Note: the input will not be empty.

# Examples
# "1plus2plus3plus4"  --> "10"
# "1plus2plus3minus4" -->  "2"

# my initial thinking
# def calculate(str)
#   str.gsub!("plus","+")
#   str.gsub!("minus","-")
# end

# top codewars solution
def calculate(s)
  s = s.gsub('plus', '+')
  s = s.gsub('minus','-')
  eval(s).to_s
end

p calculate("1plus2plus3minus4")
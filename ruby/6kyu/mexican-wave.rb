# Task
#    In this simple Kata your task is to create a function that turns a string into a 
#    Mexican Wave. You will be passed a string and you must return that string in an 
#    array where an uppercase letter is a person standing up.

# Rules
# 1.  The input string will always be lower case but maybe empty.

# 2.  If the character in the string is whitespace then pass over it as if it was an 
# empty seat.

# Example
# wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

def wave(str)
  str_array = []

  i = 0

  (str.length).times {
    str_copy = str.clone
    if  str_copy[i] != " "
        str_copy[i] = str_copy[i].upcase
        str_array << str_copy
    end
    i += 1
  }
  str_array
end

p wave("hello")
# should return ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
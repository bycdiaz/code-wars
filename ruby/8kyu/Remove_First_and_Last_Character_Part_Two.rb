# You are given a list of character sequences as a comma separated string. Write a function 
# which returns another string containing all the character sequences except the first and 
# the last ones. If the input string is empty, or the removal of the first and last items 
# would cause the string to be empty, return a null value.

# my initial solution
# def array(string)
#   array = string.split(',').to_a
#   if array.length > 2
#     array[1...-1].join(' ')
#   else
#     nil
#   end
# end

# refactored
def array(string)
  array = string.split(',').to_a
  array.length > 2 ? array[1...-1].join(' ') : nil
end

# p array('') # nil
# p array('1') # nil
# p array('1, 3') # nil
# p array('1,2,3') # '2'
# p array('1,2,3,4') # '2 3'
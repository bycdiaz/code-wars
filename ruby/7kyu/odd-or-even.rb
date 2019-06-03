# Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

# Give your answer in string format as 'odd' or 'even'.

# If the input array is empty consider it as: [0] (array with a zero).

# Example:
# odd_or_even([0]) # => 'even'
# odd_or_even([2, 5, 34, 6]) # => 'odd'
# odd_or_even([0, -1, -5]) # => 'even'

# my initial solution
# def odd_or_even(array)
#   if array.empty?
#     'even'
#   else
#     total = array.reduce(:+)
#     if total.even?
#       'even'
#     else 
#       'odd'
#     end
#   end
# end

# refactored
def odd_or_even(array)
  array.empty? ? 'even' : (array.reduce(:+)).even? ? 'even' : 'odd'
end

p odd_or_even([0]) # => "even"
p odd_or_even([1]) # => "odd"
p odd_or_even([]) # => "even"
p odd_or_even([-1023, 1, -2]) # => "even"
p odd_or_even([-1023, -1, 3]) # => "odd"
# You are given an odd-length array of integers, in which all 
# of them are the same, except for one single number.

# Complete the method which accepts such an array, and returns 
# that single different number.

# The input array will always be valid! (odd-length >= 3)

# Examples
# [1, 1, 2] ==> 2
# [17, 17, 3, 17, 17, 17, 17] ==> 3

# my solution
def stray(numbers)
  sorted = numbers.sort
  sorted[0] == sorted[1] ? sorted[-1] : sorted[0]
end

# top solution from codewars

# def stray(arr)
#   arr.each { |x| return x if arr.count(x) == 1}
# end

puts stray([17, 17, 3, 17, 17, 17, 17])
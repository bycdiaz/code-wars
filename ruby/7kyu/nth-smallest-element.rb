# Given an array/list [] of integers , Find the Nth smallest element in this array of integers.

# initial solution
# def nth_smallest(arr, pos)
#   sorted = arr.sort
#   last = sorted.first(pos)
#   last[-1]
# end

# refactored
def nth_smallest(arr, pos)
  first_n = (arr.sort).first(pos)
  first_n[-1]
end

p nth_smallest([3,1,2],2)
# You need to swap the head and the tail of the specified array:

# the head (the first half) of array moves to the end, the tail (the second half) moves to the start. 
# The middle element (if it exists) leaves on the same position.

# Return new array.

# For example:

#     [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
#      \----/   \----/         
#       head     tail 

#     [ -1, 2 ]  => [ 2, -1 ] 
#     [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  

# my initial solution
def swap_head_tail(arr)
  if (arr.length).even?
    first_half = arr.slice(0...((arr.length) / 2))
    second_half = arr.slice(((arr.length) / 2)..-1)
    second_half + first_half
  else
    middle = []
    first_half = arr.slice(0...((arr.length) / 2))
    second_half = arr.slice((((arr.length) / 2) + 1)..-1)
    middle << (arr[(arr.length) / 2])
    second_half + middle + first_half
  end
end

p swap_head_tail([ 1, 2, 3, 4, 5 ] )
# p swap_head_tail([ -1, 2 ])
# p swap_head_tail([ 1, 2, -3, 4, 5, 6, -7, 8 ])
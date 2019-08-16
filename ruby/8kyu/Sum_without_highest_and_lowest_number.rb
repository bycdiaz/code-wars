# Sum all the numbers of the array (in F# and Haskell you get a list) except 
# the highest and the lowest element (the value, not the index!).
# (The highest/lowest element is respectively only one element at each edge, 
#   even if there are more than one with the same value!)

# Example:

# { 6, 2, 1, 8, 10 } => 16
# { 1, 1, 11, 2, 3 } => 6


# If array is empty, null or None, or if only 1 Element exists, return 0.
# Note:In C++ instead null an empty vector is used. In C there is no null. ;-) 

def sum_array(arr)
  if (arr == nil) || (arr == []) || (arr.length <= 2)
    0
  else
    arr = arr.sort
    arr.delete_at(0)
    arr.delete_at(-1)
    arr.reduce(:+)
  end
end

p sum_array([6, 2, 1, 8, 10])
# Given an array of integers of any length, return an array that 
# has 1 added to the value represented by the array.

# the array can't be empty
# only non-negative, single digit integers are allowed
# Return nil (or your language's equivalent) for invalid inputs.

# Examples
# For example the array [2, 3, 9] equals 239, adding one would 
# return the array [2, 4, 0].

# [4, 3, 2, 5] would return [4, 3, 2, 6]

# my initial solution
# def up_array(arr)
#   if arr.any? { |item| item < 0}
#     nil
#   elsif arr.empty?
#     nil
#   elsif arr.any? { |item| item > 9}
#     nil
#   else
#     arr_plus_one = (arr.join("").to_i) + 1
#     split_arr_plus_one = arr_plus_one.to_s.split("")
#     split_arr_plus_one.map{ |item|
#       item.to_i
#     }
#   end
# end

# refactored
def up_array(arr)
  if (arr.any? { |item| item < 0}) || (arr.empty?) || (arr.any? { |item| item > 9})
    nil
  else
    arr_plus_one = (arr.join("").to_i) + 1
    split_arr_plus_one = arr_plus_one.to_s.split("")
    split_arr_plus_one.map{ |item|
    item.to_i
    }
  end
end

p up_array([1,-9])
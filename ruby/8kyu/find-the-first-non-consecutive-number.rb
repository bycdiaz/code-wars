# Your task is to find the first element of an array that is not consecutive.

# E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all 
# consecutive but 6 is not, so that's the first non consecutive number.

# If the whole array is consecutive then return null

# The array will always have at least 2 elements and all the elements will be numbers. 
# The numbers will also all be unique and in ascending order. The numbers could be 
# positive or negative and the first non-consecutive could be either too!

# my solution
def first_non_consecutive(arr)
  consecutive_range = (arr[0]..arr[-1]).to_a
  if consecutive_range == arr
    nil
  else
    non_consecutive_nums = (consecutive_range - arr)
    if non_consecutive_nums.length > 1
      non_consecutive_nums[0] + 1
    else
      ((non_consecutive_nums.join.to_i) + 1)
    end
  end
end

# top answer on codewars
def first_non_consecutive(arr)
  arr.each_index do |i|
    return arr[i + 1] if arr[i].next != arr[i + 1]
  end
end

p first_non_consecutive([4,6,7,8,9,11])
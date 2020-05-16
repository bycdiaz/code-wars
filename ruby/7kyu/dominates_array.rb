# A zero-indexed array arr consisting of n integers is given. The dominator of
# array arr is the value that occurs in more than half of the elements of arr.
# For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
# The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr
# and 5 is more than a half of 8.
# Write a function dominator(arr) that, given a zero-indexed array arr
# consisting of n integers, returns the dominator of arr. The function should
# return −1 if array does not have a dominator. All values in arr will be >=0.

# Initial Solution
# def dominator(arr)
#   count = {}

#   if arr == []
#     -1
#   else
#     arr.each do |num|
#       if count.has_key?(num)
#         count[num] += 1
#       else
#         count[num] = 1
#       end
#     end
#     if count.max_by { |key, value| value }[1] > arr.length / 2
#       count.max_by { |key, value| value }[0]
#     else
#       -1
#     end
#   end
# end

def dominator(arr)
  if arr == []
    -1
  else
    count = {}
    arr.each { |num| count.has_key?(num) ? count[num] += 1 : count[num] = 1 }
    max_kv = count.max_by { |key, value| value }
    max_kv[1] > arr.length / 2 ? max_kv[0] : -1
  end
end

p dominator([3,4,3,2,3,1,3,3])
# 3
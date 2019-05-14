# You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

#   Array can contain numbers or strings. X can be either.
  
#   Return true if the array contains the value, false if not.

# my initial solution
# def check(arr,element)
#   if arr.include?(element)
#     true
#   else
#     false
#   end
# end

# top codewars solution
def check(arr, element)
  arr.include?(element)
end

puts check([78, 117, 110, 99, 104, 117, 107, 115], 8)
puts check(["what", "a", "great", "kata"], "kata")
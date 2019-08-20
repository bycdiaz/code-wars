# Finish the solution so that it sorts the passed in array of numbers. If the function
# passes in an empty array or null/nil value then it should return an empty array.

# initial attempt:
# def solution(nums)
#   if nums.empty? || nums == nil
#     Array.new
#   else
#     nums.sort
#   end
# end

# 2nd attempt
def solution(nums)
  nums ? nums.sort : []
end

solution([1, 2, 10, 50, 5]) # should return [1,2,5,10,50]
solution(nil) # should return []
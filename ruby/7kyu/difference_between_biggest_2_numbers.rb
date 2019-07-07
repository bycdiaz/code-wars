# You have an array of integers. You need to calcurate the difference between 1st biggest number and 2nd biggest number of an array.

#     diff_big_2([10, 5, 2])
# In this case, 1st biggest number is 10 and 2nd biggest number is 5. So, this function return 5, the result of 10 - 5.

# You can assume that the input array must have 2 or more elements.

# The input array has the sort() method disabled, so you will have to solve it in another way.

def diff_big_2(arr)
  arr.sort[-2..-1].reverse.reduce(:-)
end

#p diff_big_2([10, 5, 2])
# p diff_big_2([9, 99, 999])
# p diff_big_2([999, 99, 9])
# p diff_big_2([100, 100])
p diff_big_2([1, 2, 10, 3, 4, 5, 6, 7, 8, 9])
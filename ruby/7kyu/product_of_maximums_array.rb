# Given an array/list [] of integers , Find the product of the k maximal numbers.
# Notes
#
#     Array/list size is at least 3 .
#
#     Array/list's numbers Will be mixture of positives , negatives and zeros
#
#     Repetition of numbers in the array/list could occur.
#
# Input >> Output Examples
#
# maxProduct ({4, 3, 5}, 2) ==>  return (20)

def max_product(numbers, size)
  numbers.max(size).reduce(:*)
end

p max_product([4,3,5], 2)
# 20

#p max_product([10,8,7,9], 3)
# 720

#p max_product([8,6,4,6], 3)
# 288

#p max_product([10,2,3,8,1,10,4], 5)
# 9600

#p max_product([13,12,-27,-302,25,37,133,155,-14], 5)
# 247895375

#p max_product([-4,-27,-15,-6,-1], 2)
# 4

#p max_product([-17,-8,-102,-309], 2)
# 136

#p max_product([10,3,-27,-1], 3)
# -30

#p max_product([14,29,-28,39,-16,-48], 4)
# -253344

#p max_product([1], 1)
# 1

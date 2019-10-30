# Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

# Assume that the input n will always be a positive integer.

# Examples:

# sumCubes(2) // 9
# // sum of the cubes of 1 and 2 is 1 + 8

def sum_cubes(n)
  ((1..n).to_a).map { |number| number ** 3 }.reduce(:+)
end


# p sum_cubes(1)
# 1

# p sum_cubes(2)
# 9

# p sum_cubes(3)
# 36

# p sum_cubes(4)
# 100

# p sum_cubes(10)
# 3025

# p sum_cubes(123)
# 58155876
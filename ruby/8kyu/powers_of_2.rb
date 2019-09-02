# Complete the function that takes a non-negative integer n as
# input, and returns a list of all the powers of 2 with the
# exponent ranging from 0 to n (inclusive).
# Examples

# n = 0  ==> [1]        # [2^0]
# n = 1  ==> [1, 2]     # [2^0, 2^1]
# n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

# initial result
# def powers_of_two(n)
#   result = []
#   (0..n).to_a.each{ |power|
#     result << 2 ** power
#   }
#   result
# end

# concise-r
def powers_of_two(n)
  (0..n).map{ |power| 2 ** power }
end

# p powers_of_two(0)
# [1]

p powers_of_two(1)
# [1, 2]

# p powers_of_two(4)
# [1, 2, 4, 8, 16]
# Task

# Given a Divisor and a Bound , Find the largest integer N , Such That ,
# Conditions :

#     N is divisible by divisor

#     N is less than or equal to bound

#     N is greater than 0.

def max_multiple(divisor, bound)
  (divisor..bound).to_a.select { |num| num % divisor == 0}.max
end

# p max_multiple(2,7)
# return (6)

# p max_multiple(10,50)
# return (50)

# p max_multiple(37,200)
# return (185)
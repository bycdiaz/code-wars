# The sum of the primes below or equal to 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below or equal to the number passed in.

require 'prime'

def sum_of_primes(n)
  Prime.first(n).select { |prime| prime <= n }.reduce(:+)
end

# p sum_of_primes(33)
# 160

# p sum_of_primes(34)
# 160

# p sum_of_primes(355)
# 11240

# p sum_of_primes(1000)
# 76127

# p sum_of_primes(2000)
# 277050

# p sum_of_primes(3000)
# 593823

# p sum_of_primes(3555)
# 814006

# p sum_of_primes(4000)
# 1013507

# p sum_of_primes(5000)
# 1548136
# Your task is to write function findSum.

# Upto and including n, this function will return the
# sum of all multiples of 3 and 5.

# For example:

# findSum(5) should return 8 (3 + 5)

# findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

def find(n)
  (0..n).to_a.select { |num| num % 3 == 0 || num % 5 == 0 }.reduce(:+)
end

# p find(5)
# 8

p find(10)
# 33
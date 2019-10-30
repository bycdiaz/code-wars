# Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

def min_value(digits)
  digits.sort.uniq.join.to_i
end

# p min_value([1, 3, 1])
# 13

# p min_value([4, 7, 5, 7])
# 457

# p min_value([4, 8, 1, 4])
# 148
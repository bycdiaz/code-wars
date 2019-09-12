# Challenge: You are given a list of numbers. The numbers each repeat a certain number of times.
# Remove all numbers that repeat an odd number of times while keeping everything else the same.

# odd_ones_out([1, 2, 3, 1, 3, 3]) = [1, 1]

# In the above example:

#     the number 1 appears twice
#     the number 2 appears once
#     the number 3 appears three times

# 2 and 3 both appear an odd number of times, so they are removed from the list. The final
# result is: [1,1]

def odd_ones_out(numbers)
  odd_count = Hash.new 0
  numbers.each do |number|
    odd_count[number] += 1
  end
  odds = []
  odd_count.each do |key,value|
    if value.odd?
      odds << key
    end
  end
  numbers - odds
end


# p odd_ones_out([1, 1, 2, 2, 3, 3, 3])
# [1, 1, 2, 2]

# p odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26])
# [26, 24, 24, 26]

# p odd_ones_out([1, 2, 3])
# []

# p odd_ones_out([1])
# []
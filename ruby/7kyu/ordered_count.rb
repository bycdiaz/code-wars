# frozen_string_literal: true

# Count the number of occurrences of each character
# and return it as a list of tuples in order of appearance.
# For empty output return an empty list.

def ordered_count(str)
  chars = str.split('')
  count = {}
  chars.each do |char|
    if count.key?(char)
      count[char] += 1
    else
      count[char] = 1
    end
  end
  count.to_a
end

p ordered_count('abracadabra')
# [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

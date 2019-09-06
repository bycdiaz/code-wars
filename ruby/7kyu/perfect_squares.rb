# Given an array of numbers return an array of numbers from
# the array that qualify as perfect squares. A perfect
# square is defined as a whole number that, when square
# rooted, is a whole number.

# (Such as 1, 4, 9, 16, etc, etc.)

# Note: Return only one copy of each perfect square
# in ascendingorder

def get_squares(range)
  if range.class == Range
    range.to_a.map { |num|
      if Math.sqrt(num) % 2 == 0 || Math.sqrt(num) % 1 == 0
        num
      end
    }.compact
  else
    range.sort.uniq.map { |num|
      if Math.sqrt(num) % 2 == 0 || Math.sqrt(num) % 1 == 0
        num
      end
    }.compact
  end
end


# p get_squares(1..16) # => [1, 4, 9, 16]
# p get_squares(1..100) # => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
p get_squares([4,1,16,1,10,35,22]) # => [1,4,16]

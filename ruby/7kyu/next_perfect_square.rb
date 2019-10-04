# You might know some pretty large perfect squares. But what about the NEXT one?

# Complete the findNextSquare method that finds the next integral perfect square
# after the one passed as a parameter. Recall that an integral perfect square is
# an integer n such that sqrt(n) is also an integer.

# If the parameter is itself not a perfect square, than -1 should be returned.
# You may assume the parameter is positive.

# initial solution -- works but times out on codewars.
# def find_next_square(sq)
#   if Math.sqrt(sq) % 1 == 0
#     range = (1..(sq * 1.2)).to_a
#     perfect_squares = range.select { |num| Math.sqrt(num) % 1 == 0 }
#     sq_index = perfect_squares.index(sq)
#     perfect_squares[sq_index + 1]
#   else
#     -1
#   end
# end

# faster solution
def find_next_square(sq)
  Math.sqrt(sq) % 1 == 0 ? ((Math.sqrt(sq) + 1 ) ** 2).to_i : -1
end

# p find_next_square(15241383936)

p find_next_square(121)
# returns 144

# p find_next_square(625)
# returns 676

# p find_next_square(114)
# returns -1 since 114 is not a perfect
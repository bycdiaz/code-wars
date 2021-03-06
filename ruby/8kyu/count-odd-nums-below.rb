# Given a number n, return the number of positive odd numbers below n, EASY!

# oddCount(7) //=> 3, i.e [1, 3, 5]
# oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]

# Expect large Inputs!


def oddCount(n)
  range = (1...n).to_a
  oddsbelow = []
  range.each { |number|
  if number.odd?
    oddsbelow << number
  end
  }
  oddsbelow.length
end

puts oddCount(15)
puts oddCount(100)
puts oddCount(7)
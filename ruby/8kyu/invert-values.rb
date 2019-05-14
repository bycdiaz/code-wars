# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

# invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
# invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
# invert([]) == []

# You can assume that all values are integers.

def invert(list)
  newarray = []
  list.each { |item|
    if item.positive?
      newarray << -(item.abs).to_i
    else
      newarray << item.abs.to_i
    end
  }
  return newarray
end

# puts invert([1,2,3,4,5])
puts invert([1,-2,3,-4,5])
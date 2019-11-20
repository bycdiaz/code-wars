# You have an array of numbers.
# Your task is to sort ascending odd numbers but even numbers must be on their places.

# Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

def sort_array(source_array)
  if source_array == []
    source_array
  else
    odds = source_array.select { |num| num.odd? }.sort

    result = []
    source_array.each do |number|
      if number.odd?
        result << odds[0]
        odds.shift
      else
        result << number
      end
    end
    result
  end
end

# p sort_array([5, 3, 2, 8, 1, 4, 0])
# [1, 3, 2, 8, 5, 4, 0]

# p sort_array([5, 3, 2, 8, 1, 4])
# [1, 3, 2, 8, 5, 4]

# p sort_array([])
# []
# Write a function that when given a number >= 0, returns an Array of
# ascending length subarrays.

# Note: the subarrays should be filled with 1s

def pyramid(numbers)
  if numbers == 0
    []
  else
    result = []

    i = 1
    
    while i <= numbers
      inner_array = []
      i.times do
        inner_array << 1
      end
      i += 1
      result << inner_array
    end
    result
  end
end

# p pyramid(0)
# [ ]

# p pyramid(1)
# [ [1] ]

# p pyramid(2)
# [ [1], [1, 1] ]

# p pyramid(3)
# [ [1], [1, 1], [1, 1, 1] ]


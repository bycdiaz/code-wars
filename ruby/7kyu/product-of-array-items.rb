# Calculate the product of all elements in an array.

# If the array is nil or is empty, the function should return nil.

def product(arr)
  arr ? arr.inject(:*): nil
end

p product([5, 4, 1, 3, 9])
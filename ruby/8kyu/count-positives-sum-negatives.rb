# Given an array of integers.

# Return an array, where the first element is the count of positives numbers 
# and the second element is sum of negative numbers.

# If the input array is empty or null, return an empty array.

# Example
# For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you 
# should return [10, -65].

def count_positives_sum_negatives(lst)
  if lst
    positives = []
    negatives = []
    lst.each { |num|
      if num > 0
        positives << num
      else num < 0
        negatives << num
      end
    }
  
    positives = positives.length
    negatives = negatives.inject(:+)
    new_array = []
  
    if positives == nil
      positives = 0
    end
  
    if negatives == nil
      negatives = 0
    end
  
    new_array[0] = positives
    new_array[1] = negatives
    new_array
  else
    []
  end
end

p count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
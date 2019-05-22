# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

# my initial solution
def positive_sum(arr)
  if arr.length > 0
    if arr.all?(&:negative?)
      0
    else
      positives = []
      arr.map { |num|
        if num.positive?
          positives << num
        end
      }
      positives.reduce(:+)
    end
  else
    0
  end
end

p positive_sum([1,-2,3,4,5])
# There is an array with some numbers. All numbers are equal except for one. 
# Try to find it!

# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
# It’s guaranteed that array contains more than 3 numbers.

# The tests contain some very huge arrays, so think about performance.

# my initial solution
def find_uniq(arr)
  sorted = arr.sort
  if sorted[0] == sorted[1]
    sorted[-1]
  else
    sorted[0]
  end
end

# refactored
def find_uniq(arr)
  sorted = arr.sort
  sorted[0] == sorted[1] ? sorted[-1] : sorted[0]
end

p find_uniq([ 1, 1, 1, 2, 1, 1 ])
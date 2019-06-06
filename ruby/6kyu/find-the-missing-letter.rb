# Write a method that takes an array of consecutive (increasing) letters as input and that returns 
# the missing letter in the array.

# You will always get an valid array. And it will be always exactly one letter be missing. The 
# length of the array will always be at least 2.
# The array will always contain letters in only one case.

# Example:

# ['a','b','c','d','f'] -> 'e'
# ['O','Q','R','S'] -> 'P'
# (Use the English alphabet with 26 letters!)

# my initial solution
def find_missing_letter(arr)
  upper_alpha, lower_alpha = ("A".."Z").to_a, ("a".."z").to_a
  if arr.any?(/[[:lower:]]/)
    ((lower_alpha[lower_alpha.index(arr[0])..lower_alpha.index(arr[-1])]) - arr).join
  else
    ((upper_alpha[upper_alpha.index(arr[0])..upper_alpha.index(arr[-1])]) - arr).join
  end
end

# top solution from codewars (currently face palming)
def find_missing_letter(arr)
  ((arr.first..arr.last).to_a - arr).first
end

# refactored (looks terrible, difficult to read)
def find_missing_letter(arr)
  upper_alpha, lower_alpha = ("A".."Z").to_a, ("a".."z").to_a
  arr.any?(/[[:lower:]]/) ? ((lower_alpha[lower_alpha.index(arr[0])..lower_alpha.index(arr[-1])]) - arr).join : ((upper_alpha[upper_alpha.index(arr[0])..upper_alpha.index(arr[-1])]) - arr).join
end



# p find_missing_letter(["a","b","c","d","f"])
p find_missing_letter(["O","Q","R","S"])
# Complete the solution so that it splits the string into pairs of two characters. 
# If the string contains an odd number of characters then it should replace the 
# missing second character of the final pair with an underscore ('_').

def solution(str)
  str_array = str.split("")
  if (str_array.length).odd?
    split_array = str_array.each_slice(2).to_a
    split_array = split_array.map { |array| array.join("")}
    split_array[1][0] = split_array[1][0].concat("_")
    split_array
  else
    split_array = str_array.each_slice(2).to_a
    split_array = split_array.map { |array| array.join("")}
  end
end

# Examples:
p solution('abc') # should return ['ab', 'c_']
p solution('abcdef') # should return ['ab', 'cd', 'ef']
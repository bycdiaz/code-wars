# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.

# my initial solution
# def find_short(s)
#   sorted_array = s.split.sort_by { |word| word.length }
#   sorted_array[0].length
# end

# refactored
def find_short(s)
  s.split.sort_by { |word| word.length }[0].length
end

p find_short("bitcoin take over the world maybe who knows perhaps") # 3
# pfind_short("turns out random test cases are easier than writing out basic ones") # 3
# pfind_short("lets talk about javascript the best language") # 3
# pfind_short("i want to travel the world writing code one day") # 1
# pfind_short("Lets all go on holiday somewhere very cold") # 2
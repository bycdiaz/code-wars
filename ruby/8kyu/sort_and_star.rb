# You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

# The returned value must be a string, and have "***" between each of its letters.

# You should not remove or add elements from/to the array.

def two_sort(s)
  s.sort[0].split("").join("***")
end

p two_sort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) # 'b***i***t***c***o***i***n'
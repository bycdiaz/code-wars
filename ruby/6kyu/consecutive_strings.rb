# You are given an array strarr of strings and an integer k. Your task is to return
# the first longest string consisting of k consecutive strings taken in the array.

# Example:
# longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

# n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

# Note
# consecutive strings : follow one after another without an interruption

def longest_consec(strarr, k)
  if k == 1
    strarr.sort_by { |string| string.length}[-1]
  elsif strarr.length == 0 || k > strarr.length || k <= 0
    ""
  else
    strarr.each_cons(k).map(&:join).max_by(&:size)
  end
end

p longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)

# p longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)

# p longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
# "oocccffuucccjjjkkkjyyyeehh"

# p longest_consec([], 3)
# ""

# p longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
# ""
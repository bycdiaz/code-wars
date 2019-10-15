# A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

# 2332
# 110011
# 54322345

# For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

# Return "Not valid" if the input is not an integer or less than 0.

def palindrome(num)
  if (num.is_a? Integer) && num > 0
    num == num.to_s.split("").reverse.join("").to_i
  else
    "Not valid"
  end
end

# p palindrome(1221)
# ,true,"'1221' should return 'True'")

# p palindrome(123322)
# ,false,"'123322' should return 'False'")

# p palindrome("ACCDDCCA")
# ,"Not valid","'ACCDDCCA' should return 'Not valid'")

# p palindrome("1221")
# ,"Not valid","'\"1221\"' should return 'Not valid'")

# p palindrome(-450)
# ,"Not valid","'-450' should return 'Not valid'")
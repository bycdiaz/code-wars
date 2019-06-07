# The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this 
# aba then the result should be { 'a': 2, 'b': 1 }

# What if the string is empty ? Then the result should be empty object literal { }

# For C#: Use a Dictionary<char, int> for this kata!

def count_chars(s)
  s.split("").each_with_object(Hash.new(0)) { |letter, letter_count| letter_count[letter] += 1} 
end

p count_chars("aba")
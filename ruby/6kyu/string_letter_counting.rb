# frozen_string_literal: true

# Take an input string and return a string that is made up of the number of
# occurances of each english letter in the input, followed by that letter.
# The string shouldn't contain zeros; leave them out.

# An empty string, or one with no letters, should return an empty string.

# Notes:

#     the input will always be valid;
#     treat letters as case-insensitive

# Examples

# "This is a test sentence."  ==>  "1a1c4e1h2i2n4s4t"
# ""                          ==>  ""
# "555"                       ==>  ""

def string_letter_count(input)
  array = input.downcase.split('').sort.select { |char| char.match(/[a-z]/) }
  count = {}
  result = []
  array.each do |letter|
    count.key?(letter) ? count[letter] += 1 : count[letter] = 1
  end
  count.each_pair { |key, value| result << "#{value}#{key}" }
  result.join
end

p string_letter_count('This is a test sentence.')
# "1a1c4e1h2i2n4s4t"

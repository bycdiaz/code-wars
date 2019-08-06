# The goal of this kata is to write a function that 
# takes two inputs: a string and a character. The 
# function will count the number of times that 
# character appears in the string. The count is 
# case insensitive.

# For example:

# count_char("fizzbuzz","z") => 4
# count_char("Fancy fifth fly aloof","f") => 5
# The character can be any alphanumeric character.

def count_char(string, char)
  char_count = 0
  string.split("").each { |letter|
    if letter.downcase == char.downcase
      char_count += 1
    end
  }
  char_count
end

# p count_char('fizzbuzz', 'z')
p count_char("Fancy fifth fly aloof","f")
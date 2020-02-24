# Write a method that takes a string as an argument and groups the number of time each
# character appears in the string as a hash sorted by the highest number of occurrences.

# The characters should be sorted alphabetically e.g:

# get_char_count("cba") => {1=>["a", "b", "c"]}
# You should ignore spaces, special characters and count uppercase letters as lowercase
# ones.

# For example:

# get_char_count("Mississippi") => {4=>["i", "s"], 2=>["p"], 1=>["m"]}
# get_char_count("Hello. Hello? HELLO!!") => {6=>["l"], 3=>["e", "h", "o"]}
# get_char_count("aaa...bb...c!") => {3=>["a"], 2=>["b"], 1=>["c"]}
# get_char_count("aaabbbccc") => {3=>["a", "b", "c"]}
# get_char_count("abc123") => {1=>["1", "2", "3", "a", "b", "c"]}

def get_char_count(string)
  if string == "" || string == nil
    {}
  else
    count = Hash.new 0

    string.downcase.split("").each do |char|
      if char =~ /[[:alpha:]]/ || char =~ /[[:digit:]]/
        count[char] += 1
      end
    end
  
    max_count = count.sort_by { |key,value| value }.reverse[0][-1]
    count_array = count.sort_by { |key,value| value }.reverse
  
    result = Hash.new
  
    while max_count > 0
      sub_array = []
      count_array.each do |item|
        if item[-1] == max_count
          sub_array << item[0]
        end
      end
      result[max_count] = sub_array.sort
      max_count -= 1
    end
    result.delete_if { |key,value| value == [] }
  end
end

# p get_char_count("")

# p get_char_count("Mississippi")
# {4=>["i", "s"], 2=>["p"], 1=>["m"]}

# p get_char_count("Hello. Hello? HELLO!")
# {6=>["l"], 3=>["e", "h", "o"]}

# p get_char_count("aaa...bb...c!")
# {3=>["a"], 2=>["b"], 1=>["c"]}

# p get_char_count("abc123")
# {1=>["1", "2", "3", "a", "b", "c"]}

# p get_char_count("aaabbbccc")
# {3=>["a", "b", "c"]}
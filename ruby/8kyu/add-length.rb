# What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

# add_length('apple ban') => ["apple 5", "ban 3"]
# add_length('you will win') => ["you 3", "will 4", "win 3"]

# Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element.

def add_length(str)
  wordAndLength = []
  str.each { |word|
    wordAndLength << "#{word} #{word.length}"
  }
  wordAndLength
end

puts add_length('apple ban')

# a = [ "a", "b", "c" ]
# a.each {|x| print x, " -- " }
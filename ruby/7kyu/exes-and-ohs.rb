# Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and 
# be case insensitive. The string can contain any char.

#   Examples input/output:
  
#   XO("ooxx") => true
#   XO("xooxx") => false
#   XO("ooxXm") => true
#   XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
#   XO("zzoo") => false

# my initial solution
def XO(string)
  string_array = string.downcase.split("")
  exes = []
  ohs = []
  string_array.each { |letter|
    if letter == 'x'
      exes << letter
    elsif letter == 'o'
      ohs << letter
    end
  }
  exes.length == ohs.length
end

# top solution from codewars
def XO(str)
  str.downcase.count('x') == str.downcase.count('o')
end

# p XO("ooxx")
p XO("zpzpzpp")
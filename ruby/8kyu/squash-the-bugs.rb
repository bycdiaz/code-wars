# Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the 
# expected value. Output should be the length of the longest word, as a number.

# There will only be one 'longest' word.

def find_longest(string)
  spl = string.split(" ")
  longest_word = spl.max_by { |x| x.length }
  longest_word.length
end

# p find_longest("The quick white fox jumped around the massive dog")
# expected return of 7

p find_longest("Take me to tinseltown with you")
# expected return of 10
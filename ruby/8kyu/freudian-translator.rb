# In this kata, the toFreud() function will take a string as its argument, 
# and return a string with every word replaced by the explanation to everything, 
# according to Freud. Note that an empty string, or no arguments, should result 
# in the ouput being ""(empty string).

def to_freud(sentence)
  array = sentence.split(" ")
  sexy_sentence = []
  array.each { |word|
    sexy_sentence << "sex"
  }
  sexy_sentence.join(" ")
end

p to_freud("You're becoming a true freudian expert")
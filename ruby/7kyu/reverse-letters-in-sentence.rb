# Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, 
# just the letters in each word.

# If there is punctuation, it should be interpreted as a regular character; no special rules.

# If there is spacing before/after the input string, leave them there.

# String will not be empty.

# Examples
# "Hi mom" => "iH mom"
# " A fun little challenge! " => " A nuf elttil !egnellahc "

# my initial attempt
# def reverser(sentence)
#   if sentence == " "
#     sentence
#   else
#     reversed_sentence = sentence.split(/ /)
#       reversed_sentence.map { |word|
#       word.reverse
#       }.join(" ")
#   end
# end

def reverser(sentence)
  if sentence == " "
    " "
  else
    sentence.split("").reverse().join("").split(" ").reverse().join(" ")
  end
end

p reverser(" Hi  mom ")
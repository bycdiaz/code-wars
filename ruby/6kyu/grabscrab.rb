# Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

# At long last, we need a way to unscramble what these pirates are saying.

# Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

# For example:

# grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )

# Should return ["sport", "ports"].

# Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

def grabscrab(anagram,dictionary)
  result = []
  dictionary.each do |word|
    if anagram.split("").sort == word.split("").sort
      result << word
    end
  end
  result
end

# p grabscrab("trisf", ["first"])
# ["first"], "Should have found 'first'"

# p grabscrab("oob", ["bob", "baobab"])
# [], "Should not have found anything"

# p grabscrab("ainstuomn", ["mountains", "hills", "mesa"])
# ["mountains"], "Should have found 'mountains'"

# p grabscrab("oolp", ["donkey", "pool", "horse", "loop"])
# ["pool", "loop"], "Should have found 'pool' and 'loop'"

# p grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])
# ["sport", "ports"], "Should have found 'sport' and 'ports'"

# p grabscrab("ourf", ["one","two","three"])
# [], "Should not have found anything"
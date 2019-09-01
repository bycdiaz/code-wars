# Given a string of words, you need to find the highest scoring word.

# Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

# You need to return the highest scoring word as a string.

# If two words score the same, return the word that appears earliest in the original string.

# All letters will be lowercase and all inputs will be valid.

def high(x)
  alphabet = ('a'..'z').to_a
  scores = Hash.new
  x.split(" ").each { |key,value|
    score = []
    key.split("").each { |letter|
      score << (alphabet.index(letter)) + 1
    }
    scores[key] = score.reduce(:+)
  }
  scores.max_by{|k,v| v}[0]
end

p high('man i need a taxi up to ubud')
# 'taxi'

# p high('what time are we climbing up the volcano')
# 'volcano'

# p high('take me to semynak')
# 'semynak'

# p high('aaa b')
# 'aaa'
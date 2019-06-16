# You have managed to intercept an important message and you are trying to read it.

# You realise that the message has been encoded and can be decoded by switching 
# each letter with a corresponding letter.

# You also notice that each letter is paired with the letter that it coincides 
# with when the alphabet is reversed.

# For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc

# You read the first sentence:

# "r slkv mlylwb wvxlwvh gsrh nvhhztv"
# After a few minutes you manage to decode it:

# "i hope nobody decodes this message"
# Create a function that will instantly decode any of these messages

# You can assume no punctuation or capitals, only lower case letters, but remember 
#   spaces!

# My initial solution
def decode(message)
  alpha_reg = ('a'..'z').to_a
  alpha_rev = alpha_reg.reverse
  new_word = []
  message.split("").each { |char| 
    if char == " "
      new_word << " "
    else
      new_word << alpha_rev[alpha_reg.index(char)]
    end
  }
  new_word.join
end

# p decode("svool")
# 'hello'
p decode("r slkv mlylwb wvxlwvh gsrh nvhhztv")
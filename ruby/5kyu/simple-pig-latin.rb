# Move the first letter of each word to the end of it, then add 
# "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !

def pig_it(text)
  text_array = text.split
  text_array.map { |word|
    if word.length > 1
      word[1..-1] + word[0] + "ay"
    elsif word.match(/[[:alpha:]]/)
      word + "ay"
    else
      word
    end
  }.join(" ")
end

# p pig_it('Pig latin is cool')
p pig_it('Hello world !')
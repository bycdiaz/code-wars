# Your task is to add up letters to one letter.

# The function will be given a variable amount of arguments, each one being a letter to add.
# Notes:

#     Letters will always be lowercase.
#     Letters can overflow (see second to last example of the description)
#     If no letters are given, the function should return 'z'

def add_letters(*args)
  if args.length >= 1
    alphabet = ('a'..'z').to_a

    letter_total = []
  
    alphabet.each_with_index do |letter, letter_index|
      args.each do |arg|
        if arg == letter
          letter_total << letter_index + 1
        end
      end
    end
  
    letter_total = (letter_total.reduce(:+) - 1)
  
    while letter_total >= alphabet.length
      alphabet += alphabet
    end
    alphabet[letter_total]
  else
    'z'
  end
end

# p add_letters('a', 'b', 'c')
# 'f'

# p add_letters('a', 'b')
# 'c'

# p add_letters('z')
# 'z'

# p add_letters('z', 'a')
# 'a'

# p add_letters('y', 'c', 'b')
# 'd' # notice the letters overflowing

# p add_letters()
# 'z'

p add_letters("c")
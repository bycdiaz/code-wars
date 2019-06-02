# Given an array of numbers, you must return a string. The numbers correspond to the 
# letters of the alphabet in reverse order: a=26, z=1 etc. You should also account 
# for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

# All inputs will be valid.

def switcher(arr)
  alphabet = (("a".."z").to_a).reverse
  alphabet << "!"
  alphabet << "?"
  alphabet << " "
  num_array = []
  arr.delete('0')
  arr.each { |item|
    num_array << item.to_i
  }
  word = []
  num_array.each { |num|
    word << alphabet[num - 1]
  }
  word.join("")
end

# p switcher(['24', '12', '23', '22', '4', '26', '9', '8'])
p switcher(['25','7','8','0','4','14','23','8','25','23','29','16','16','4'])
p switcher(['0'])
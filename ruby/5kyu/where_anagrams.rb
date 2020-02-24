# What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

# 'abba' & 'baab' == true

# 'abba' & 'bbaa' == true

# 'abba' & 'abbba' == false

# 'abba' & 'abca' == false

# Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

def anagrams(key, words)
  indexes = []
  words.each_with_index do |item,index|
    if key.split("").sort == item.split("").sort
      indexes << index
    end
  end

  result =[]
  words.each_with_index do |item,index_main|
    indexes.each do |other_index|
      if other_index == index_main
        result << item
      end
    end
  end
  result
end

# p anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
# ['aabb', 'bbaa']

# p anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
# ['carer', 'racer']

# p anagrams('laser', ['lazing', 'lazy',  'lacer'])
# []
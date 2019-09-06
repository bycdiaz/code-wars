# Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

# Notes:

#     Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

#     In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

#     Beware: r must be without duplicates.
#     Don't mutate the inputs.

# initial attempt
# def in_array(array1, array2)
#   result = []
#   array2.each { |word1| 
#     array1.each { |word2|
#       if word1.include? word2
#         result << word2
#       end
#     }
#   }
#   result.sort.uniq
# end

# concise-r
def in_array(array1, array2)
  array2.map { |word1| 
    array1.map { |word2|
      if word1.include? word2
        word2
      end
    }
  }.flatten.compact.sort.uniq
end

p in_array(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])
# returns ["arp", "live", "strong"]

# p in_array(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"])
# returns []
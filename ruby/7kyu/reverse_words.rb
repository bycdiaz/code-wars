# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
# Examples

# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"

def reverse_words(str)
  if str.include? ("  ")
    str = str.split(" ").map { |word| word.reverse}.join("  ")
  else
    str = str.split(" ").map { |word| word.reverse}.join(" ")
  end
end

# p reverse_words('The quick brown fox jumps over the lazy dog.')
# 'ehT kciuq nworb xof spmuj revo eht yzal .god'

# p reverse_words('apple')
# 'elppa'

# p reverse_words('a b c d')
# 'a b c d'

p reverse_words('double  spaced  words')
# 'elbuod  decaps  sdrow'
# Given a lowercase string that has alphabetic characters only and no spaces,
# return the highest value of consonant substrings. Consonants are any
# letters of the alpahabet except "aeiou".

# We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

# For example, for the word "zodiacs", let's cross out the vowels. We get:
# "z o d ia cs"

# -- The consonant substrings are: "z", "d" and "cs" and the values are
# z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
# solve("zodiacs") = 26

# For the word "strength", solve("strength") = 57
# -- The consonant substrings are: "str" and "ngth" with values "str" = 19
# + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

# For C: do not mutate input.

def solve(s)
  alphabet = ("a".."z").to_a
  # s.gsub!(/[aeiou]/, '')
  s = s.split(/[aeiou]/)
  score = []
  s.each do |char|
    if char.length == 1
      score << (alphabet.index(char)) + 1
    else
      sum = []
      char.split("").each do |char|
        sum << (alphabet.index(char)) + 1
      end
      score << sum.reduce(:+)
    end
  end
  score.compact.max
end

p solve("zodiac")
# 26

# p solve("chruschtschov")
# 80

#p solve("khrushchev")
# 38

#p solve("strength")
# 57

#p solve("catchphrase")
# 73

#p solve("twelfthstreet")
# 103

#p solve("mischtschenkoana")
# 80
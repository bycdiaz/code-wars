# If　a = 1, b = 2, c = 3 ... z = 26

# Then l + o + v + e = 54

# and f + r + i + e + n + d + s + h + i + p = 108

# So friendship is twice stronger than love :-)

# The input will always be in lowercase and never be empty.

# initial solution
def words_to_marks(string)
  alphabet = ("a".."z").to_a

  score = []

  string.split("").each do |char|
    score << alphabet.index(char) + 1
  end

  score.reduce(:+)

end

# concise solution
def words_to_marks(string)
  string.split("").map { |char| ("a".."z").to_a.index(char) + 1 }.reduce(:+)
end

# p words_to_marks("attitude")
# 100

# p words_to_marks("friends")
# 75

# p words_to_marks("family")
# 66

# p words_to_marks("selfness")
# 99

# p words_to_marks("knowledge")
# 96
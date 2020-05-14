# In this Kata, you will be given two strings a and b and your task will be
# to return the characters that are not common in the two strings.

# For example:

# solve("xyab","xzca") = "ybzc" 
# --The first string has 'yb' which is not in the second string. 
# --The second string has 'zc' which is not in the first string. 

# Notice also that you return the characters from the first string
# concatenated with those from the second string.

# initial solution
def solve(a,b)
  not_common = []
  a.split('').each do |char|
    if !b.include?(char)
      not_common << char
    end
  end

  b.split('').each do |char|
    if !a.include?(char)
      not_common << char
    end
  end

  not_common.join
end

p solve("xyab","xzca")
# "ybzc" 
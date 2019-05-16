# Ask a small girl - "How old are you?". She always says strange things... Lets help her!

# For correct answer program should return int from 0 to 9.

# Assume test input string always valid and may look like "1 year old" or "5 years old", 
# etc.. The first char is number only.

# my initial solution
def get_age(age)
  num = (age.split)[0].to_i
end

p get_age("2 years old")

# top answer on codewars
# def get_age(age)
#   age.to_i
# end

# for above, when .to_i, collects first integer and drops rest of string
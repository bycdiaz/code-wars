# Your function takes two arguments:

# current father's age (years)
# current age of his son (years)
# Сalculate how many years ago the father was twice as old as his son 
# (or in how many years he will be twice as old).

# initial solution
def twice_as_old(dad, son)
  sons_age_twice = son * 2
  sons_age_twice > dad ? sons_age_twice - dad : dad - sons_age_twice
end

# alterative
def twice_as_old(dad, son)
  (son * 2) > dad ? (son * 2) - dad : dad - (son * 2)
end

p twice_as_old(36,7)
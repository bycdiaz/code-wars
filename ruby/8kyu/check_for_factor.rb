# This function should test if the factor is a factor of base.

# Return true if it is a factor or false if it is not.
# Information

# Factors are numbers you can multiply together to get another number.

# 2 and 3 are factors of 6 because:

# 2 * 3 = 6

# You can find a factor by dividing numbers. If the remainder is 0
# then the number is a factor.
# In Javascript and C# you can use % to check for a remainder

# For example 2 is not a factor of 7 because:

# 7 % 2 = 1

def check_for_factor(base, factor)
  base % factor == 0
end

p check_for_factor(10, 2)
# true

# p check_for_factor(63, 7)
# true

# p check_for_factor(2450, 5)
# true

# p check_for_factor(24612, 3)
# true

# p check_for_factor(9, 2)
# false

# p check_for_factor(653, 7)
# false

# p check_for_factor(2453, 5)
# false

# p check_for_factor(24617, 3)
# false
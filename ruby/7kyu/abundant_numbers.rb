# An abundant number or excessive number is a number for which the sum of its proper divisors is greater than the number itself.

# The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16 (> 12).

# Derive function abundantNumber(num)/abundant_number(num) which returns true/True/.true. if num is abundant, false/False/.false. if not.

def abundant_number?(num)
  (1...num).to_a.select { |number| num % number == 0 }.reduce(:+) > num
end

# p abundant_number?(12)
# true

# p abundant_number?(18)
# true

# p abundant_number?(37)
# false

# p abundant_number?(120)
# true

# p abundant_number?(77)
# false

# p abundant_number?(118)
# false

# p abundant_number?(5830)
# true

# p abundant_number?(11410)
# true

# p abundant_number?(14771)
# false

# p abundant_number?(11690)
# true
# Jack really likes his number five: the trick here is that you have to multiply each number by 5
# raised to the number of digits of each numbers, so, for example:

# multiply(3)==15
# multiply(10)==250
# multiply(200)==25000
# multiply(0)==0
# multiply(-3)==-15

def multiply(n)
  if n > 0
    n = n.abs
    power = n.digits.length
    n * (5 ** power)
  else
    n = n.abs
    power = n.digits.length
    -(n * (5 ** power))
  end
end

# p multiply(10)
# 250

# p multiply(5)
# 25

# p multiply(200)
# 25000

# p multiply(0)
# 0

p multiply(-2)
# -10
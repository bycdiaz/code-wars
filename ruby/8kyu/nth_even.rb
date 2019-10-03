# Return the Nth Even Number

# nthEven(1) //=> 0, the first even number is 0
# nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

# nthEven(100) //=> 198
# nthEven(1298734) //=> 2597466

# The input will not be 0.

# def nth_even(n)
#   range = (0..(n * 2)).to_a.select { |num| num.even?}
#   range[n - 1]
# end

# initial solution that was timing out
# def nth_even(n)
#   (0..(n * 2)).to_a.select { |num| num.even?}[n - 1]
# end

def nth_even(n)
  (n - 1) * 2
end

# p nth_even(1)
# 0

# p nth_even(2)
# 2

# p nth_even(3)
# 4

# p nth_even(100)
# 198

p nth_even(1298734)
# 2597466
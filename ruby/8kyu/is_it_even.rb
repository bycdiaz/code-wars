# In this Kata we are passing a number (n) into a function.

# Your code will determine if the number passed is even (or not).

# The function needs to return either a true or false.

# Numbers may be positive or negative, integers or floats.

# Floats are considered UNeven for this kata.

# initial attempt
# def test_even(n)
#   if n == n.to_f || n != 0
#     puts "test1"
#     false
#   elsif n == 0
#     puts "test2"
#     true
#   else
#     n.even?
#   end
# end

# 2nd attempt
def test_even(n)
  n.is_a?(Integer) && n.even?
end

# p test_even(0)
# true, "testEven for 0");

# p test_even(0.5)
# false, "testEven for 0.5");

# p test_even(1)
# false, "testEven for 1");

# p test_even(2)
# true, "testEven for 2");

# p test_even(-4)
# true, "testEven for 2");

p test_even(0)
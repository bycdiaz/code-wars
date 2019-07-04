# Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be 
# built with the sides of given length and false in any other case.

# (In this case, all triangles must have surface greater than 0 to be accepted).

# My initial solution
def isTriangle(*args)
  sides = args
  sides.sort!
  sides[0] + sides[1] > sides[2]
end

# top solution from codewars
# def isTriangle(a,b,c)
#   a, b, c = [a, b, c].sort
#   a + b > c
# end

# p isTriangle(1,2,2) # true
p isTriangle(7,2,2) # false
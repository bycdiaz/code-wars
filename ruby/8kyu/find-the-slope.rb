# Given an array of 4 integers
# [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the 
# line joining these two points.

# For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

#    a:x1
#    b:y1
#    c:x2
#    d:y2```

# Assume that ```[a,b,c,d]``` and the answer are all integers 
# (no floating numbers!).
# Slope: <https://en.wikipedia.org/wiki/Slope>

# initial solution
def find_slope(points)
  changey = (points[-1] - points[1])
  changex = (points[2] - points[0])
  if changex == 0
    "undefined"
  else
    (changey / changex).to_s
  end
end

# refactored
def find_slope(points)
  changey = (points[-1] - points[1])
  changex = (points[2] - points[0])
  changex == 0 ? "undefined" : (changey / changex).to_s
end
p find_slope([12,-18,-15,-18])
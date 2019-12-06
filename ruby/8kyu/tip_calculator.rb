# Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

# You need to consider the following ratings:

#     Terrible: tip 0%
#     Poor: tip 5%
#     Good: tip 10%
#     Great: tip 15%
#     Excellent: tip 20%

# The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

#     "Rating not recognised" in Javascript, Python and Ruby...
#     ...or null in Java
#     ...or -1 in C#

# Because you're a nice person, you always round up the tip, regardless of the service.

def calculate_tip(amount, rating)
  case rating.downcase
  when "terrible"
    (amount * 0).ceil
  when "poor"
    (amount * 0.05).ceil
  when "good"
    (amount * 0.10).ceil
  when "great"
    (amount * 0.15).ceil
  when "excellent"
    (amount * 0.20).ceil
  else
    "Rating not recognised"
  end
end

p calculate_tip(30, "poor")
# 2

p calculate_tip(20, "Excellent")
# 4

p calculate_tip(20, "hi")
# 'Rating not recognised'

p calculate_tip(107.65, "GReat")
# 17

p calculate_tip(20, "great!")
# 'Rating not recognised'
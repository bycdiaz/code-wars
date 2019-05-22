# If you can't sleep, just count sheep!!

# Task:
# Given a non-negative integer, 3 for example, 
# return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
# Input will always be valid, i.e. no negative integers.

# my original solution
def count_sheep(num)
  sheep_count = []
  num.times do |sheep|
    sheep_count << "#{sheep + 1} sheep..."
  end
  sheep_count.join("")
end

p count_sheep(6)
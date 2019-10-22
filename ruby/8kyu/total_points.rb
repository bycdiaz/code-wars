# Our football team finished the championship. The result of each match look like "x:y".
# Results of all matches are recorded in the collection.

# For example: ["3:1", "2:2", "0:1", ...]

# Write a function that takes such collection and counts the points of our team in the
# championship. Rules for counting points for each match:

# if x>y - 3 points
# if x<y - 0 point
# if x=y - 1 point

def points(games)
  total_points = []  
  games.each do |game|
    if game.split(":")[0] > game.split(":")[-1]
      total_points << 3
    elsif game.split(":")[0] < game.split(":")[-1]
      total_points << 0
    else
      total_points << 1
    end
  end
  total_points.reduce(:+)
end

# p points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])
# 30

# p points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])
# 10

# p points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])
# 0

# p points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])
# 15

# p points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])
# 12
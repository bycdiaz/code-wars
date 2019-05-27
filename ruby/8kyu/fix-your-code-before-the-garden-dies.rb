# You have an award-winning garden and everyday the plants need exactly 40mm of water. 
# You created a great piece of code to calculate the amount of water your plants will 
# need when you have taken into consideration the amount of rain water that is forecast 
# for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

# Your task is to debug the code before your plants die!

# initial solution
def rain_amount(mm)
  if (mm < 40)
    "You need to give your plant #{40 - mm}mm of water"
  else
    "Your plant has had more than enough water for today!"
  end
end

# refactored
def rain_amount(mm)
  mm < 40 ? "You need to give your plant #{40 - mm}mm of water" : "Your plant has had more than enough water for today!"
end

p rain_amount(0)
# "Your plant has had more than enough water for today!"
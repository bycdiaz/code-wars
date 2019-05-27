# You have an award-winning garden and everyday the plants need exactly 40mm of water. 
# You created a great piece of code to calculate the amount of water your plants will 
# need when you have taken into consideration the amount of rain water that is forecast 
# for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

# Your task is to debug the code before your plants die!

def rain_amount(mm)
  if (mm == 40)
    "Your plant has had more than enough water for today!"
  else
    "You need to give your plant #{mm - 40}mm of water"
  end
end

p rain_amount(100)
# "Your plant has had more than enough water for today!"
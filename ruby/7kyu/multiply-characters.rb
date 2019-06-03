# Here we have a function that help us spam our hearty laughter. But is not working! 
# I need you to find out why...

# Expected results:

# spam(1)  # "hue"
# spam(6)  # "huehuehuehuehuehue"
# spam(14) # "huehuehuehuehuehuehuehuehuehuehuehuehuehue"

#fix this code!
# def spam(number)
#   message = []
#   number.times do
#     message << "hue"
#   end
#   message.join("")
# end

# alternative, without using times
def spam(number)
  'hue' * number
end

p spam(6)
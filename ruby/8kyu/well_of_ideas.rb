# For every good kata idea there seem to be quite a few bad ones!

# In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 
# 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 
# return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

def well_of_ideas(x)
  good_ideas = []
  x.each { |idea| 
    if idea == 'good'
      good_ideas << idea
    end
  }
  good_ideas = good_ideas.length

  if good_ideas == 1 || good_ideas == 2
    "Publish!"
  elsif good_ideas > 2
    'I smell a series!'
  else
    "Fail!"
  end
end

p well_of_ideas(['good','bad','good','good','bad'])
# Timmy & Sarah think they are in love, but around where they live, 
# they will only know once they pick a flower each. If one of the 
# flowers has an even number of petals and the other has an odd 
# number of petals it means they are in love.

# Write a function that will take the number of petals of each 
# flower and return true if they are in love and false if they 
# aren't.

def lovefunc( flower1, flower2 )
  if flower2.even? && flower1.odd?
    true
  elsif flower1.even? && flower2.odd?
    true
  else
    false
  end
end

p lovefunc(1,4)
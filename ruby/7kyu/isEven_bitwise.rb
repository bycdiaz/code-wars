# If the numbers is even return true. If it's odd, return false. 
# Oh yeah... the following symbols/commands have been disabled!

# use of ```%```
# use of ```.even?``` in Ruby

# initial solution
def is_even(n)
  if n.odd?
    false
  else
    true
  end
end

# concise
def is_even(n)
  n.odd? ? false : true
end
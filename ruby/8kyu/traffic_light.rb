# You're writing code to control your town's traffic lights.
# You need a function to handle each change from green, to
# yellow, to red, and then to green again.

# Complete the function that takes a string as an argument
# representing the current state of the light and returns a
# string representing the state the light should change to.

# For example, update_light('green') should return 'yellow'.

def update_light(current)
  case current
  when 'green'
    'yellow'
  when 'yellow'
    'red'
  when 'red'
    'green'
  end
end

# p update_light('green')
# 'yellow'

# p update_light('yellow')
# 'red'

p update_light('red')
# 'green'
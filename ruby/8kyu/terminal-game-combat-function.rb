# Create a combat function that takes the player's current health and the amount of damage recieved, 
# and returns the player's new health. Health can't be less than 0.

# my initial solution
def combat(health, damage)
  if health > damage
    new_health = health - damage
  else
    0
  end
end

# refactored
def combat(health, damage)
  health > damage ? new_health = health - damage : 0
end
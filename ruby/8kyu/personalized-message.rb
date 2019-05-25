# Personalized greeting
# Create a function that gives a personalized greeting. This function 
# takes two parameters: name and owner.

# Use conditionals to return the proper message:

# ======= case | return --- | --- name equals owner | 'Hello boss' 
#   otherwise | 'Hello guest'


# initial solution
def greet(name,owner) 
  if name == owner
    "Hello boss"
  else
    "Hello guest"
  end
end

# refactored

def greet(name,owner) 
  name == owner ? "Hello boss" : "Hello guest"
end
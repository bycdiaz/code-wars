# Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that

# accepts the name of a programmer, and
# returns the number of lightsabers owned by that person.
# The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome 
# number of lightsabers. Anyone else owns 0.

# No starting help here -- you'll need to know how to write a function that accepts a 
# parameter and returns a value based on that parameter.

# howManyLightsabersDoYouOwn("anyone else") \\ should === 0
# howManyLightsabersDoYouOwn("Zach") \\ should === 18

# my initial solution
def howManyLightsabersDoYouOwn(name = nil)
  if name == "Zach"
    18
  else 
    0
  end
end

# refactored
def howManyLightsabersDoYouOwn(name = nil)
  name == "Zach" ? 18 : 0
end

p lightsabers("Zach")
p howManyLightsabersDoYouOwn()
p howManyLightsabersDoYouOwn("Adam")
p howManyLightsabersDoYouOwn("Zach")

# 1- Method name is howManyLightsabersDoYouOwn.
# 2- Argument has to have a default value of and an empty string.
# 3- Some test cases:
# Test.expect(howManyLightsabersDoYouOwn()===0)
# Test.expect(howManyLightsabersDoYouOwn("Adam")===0)
# Test.expect(howManyLightsabersDoYouOwn("Zach")===18)
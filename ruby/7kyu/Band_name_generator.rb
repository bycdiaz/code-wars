# My friend wants a new band name for her band. She like bands that use the formula: "The" + a 
# noun with the first letter capitalized, for example:

# "dolphin" -> "The Dolphin"

# However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice 
# and connect them together with the first and last letter, combined into one word (WITHOUT 
#   "The" in front), like this:

# "alaska" -> "Alaskalaska"

# Complete the function that takes a noun as a string, and returns her preferred band name 
# written as a string.

# my initial solution
# def band_name_generator(name)
#   if name[0] == name[-1]
#     name[0..-2].capitalize + name
#   else
#     "The #{name.capitalize}"
#   end
# end

# refactored
def band_name_generator(name)
  name[0] == name[-1] ? name[0..-2].capitalize + name : "The #{name.capitalize}"
end

# p band_name_generator("knife") #"The Knife"
p band_name_generator("tart") # "Tartart"
# p band_name_generator("sandles") #"Sandlesandles"
# p band_name_generator("bed") # "The Bed"
# p band_name_generator("qq") # "Qqq"
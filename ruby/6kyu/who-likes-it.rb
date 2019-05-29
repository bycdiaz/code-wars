# You probably know the "like" system from Facebook and other pages. 
# People can "like" blog posts, pictures or other items. We want to 
# create the text that should be displayed next to such an item.

# Implement a function likes :: [String] -> String, which must take 
# in input array, containing the names of people who like an item. 
# It must return the display text as shown in the examples:

# likes [] // must be "no one likes this"
# likes ["Peter"] // must be "Peter likes this"
# likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
# likes ["Max", "John", "Mark"] // must be "Max, 
# John and Mark like this"
# likes ["Alex", "Jacob", "Mark", "Max"] // must be 
# "Alex, Jacob and 2 others like this"
# For 4 or more names, the number in and 2 others simply increases.

# my initial solution
def likes(names)
  if names.empty?
    "no one likes this"
  elsif names.length == 1
    "#{names[0]} likes this"
  elsif names.length == 2
    "#{names[0]} and #{names[1]} like this"
  elsif names.length == 3
    "#{names[0]}, #{names[1]} and #{names[2]} like this"
  elsif names.length == 4
    "#{names[0]}, #{names[1]} and 2 others like this"
  else
    "#{names[0]}, #{names[1]} and #{((names.length) - 2)} others like this"
  end
end

p likes(["Nigel, Nene Romanova, Anri, Largo, Linna Yamazaki, Sylia Stingray"])
# should return "Nigel, Nene Romanova and 4 others like this"
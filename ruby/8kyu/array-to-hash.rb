# Create a method to_h that accepts a list, and converts it to a hash of key-value pairs.

# Here's a simple example:

# animals = [["cat", "dog"], ["duck", "cow"]]
# to_h(animals)
#     #=> {"cat" => "dog", "duck" => "cow"}

# If you need help, here's a reference:

# http://www.rubycuts.com/enum-to-h



def to_h list
  list.to_h
end

puts to_h([["cat", "dog"], ["duck", "cow"]])
# Create a method select that accepts a list and a 
# block, and returns a new array of elements for 
# which the given block returns true.

def select list, &block
  list.select(&block)
end

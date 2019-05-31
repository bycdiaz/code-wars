# Create a method flat_map that accepts a list and a block, runs the block for each item in the list. 
# It should return a new array with the block return values, and that array should be flattened (1-dimensional).

def flat_map list, &block
  list.flat_map(&block)
end
# Create a method reject that accepts a list and a block, and returns a
# list of elements for which the block returns false.

def reject(list, &block)
  list.reject(&block)
end
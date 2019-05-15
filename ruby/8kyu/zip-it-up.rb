# Create a method zip that accepts two lists of the same length, and combines their result into a single array, like so:


#     #=> ['a', 'b', 'c', 'd', 'e', 'f']

# initial solution
# def zip first, second
#   new_list = first + second
#   new_list.sort
# end

# refactored
def zip (first, second) (first + second).sort end

# actual solution
def zip first, second
  first.zip(second).flatten
end

first = ['a', 'c', 'e']
second = ['b', 'd', 'f']
p zip(first, second)
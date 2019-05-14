# Create a method first that accepts a list and an optional parameter 
# n. If n is unspecified, it returns just the first element of the list. 
# If n is specified, it returns up to that number of elements from the 
# beginning of the list.

# original attempt
# def first(list, n=nil)
#   if n == nil
#     list.first
#   else
#     list.first(n.to_i)
#   end
# end

# refactor
def first(list, n=nil)
  n == nil ? list.first : list.first(n.to_i)
end

list = [0,1,2,3,5,8,13]
puts first(list, 2)
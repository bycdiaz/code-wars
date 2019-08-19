# Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the 
# "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, 
# regardless of the order.

# initial attempt:
# def comp(array1, array2)
#   if (array1 == nil) || (array2 == nil) 
#     false
#   elsif (array1.empty?) || (array2.empty?)
#     "a or b are empty or not empty lists."
#   else
#     array2.map {|number| 
#       number / number
#     }
#     array1.sort == array2.sort
#   end
# end

# 2nd attempt
def comp(a, b)
  (a == nil) || (b == nil) ? false : a.sort.map { |num| num ** 2} == b.sort
end

p comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])
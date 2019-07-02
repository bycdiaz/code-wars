# Write a function that rearranges an integer into its largest possible value.

# super_size(123456) # 654321
# super_size(105)    # 510
# super_size(12)     # 21
# If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

# my solution
def super_size(n)
  n.to_s.split("").map{ |item| item.to_i}.sort.reverse.join.to_i
end

# top solution from codewars
def super_size(n)
  n.to_s.chars.sort.reverse.join.to_i
end

# super_size(123456) # 654321
# super_size(105)    # 510
p super_size(12)     # 21
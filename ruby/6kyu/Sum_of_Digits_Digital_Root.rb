# A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. 
# If that value has more than one digit, continue reducing in this way until a single-digit number is 
# produced. This is only applicable to the natural numbers.

# Here's how it works:

# digital_root(16)
# => 1 + 6
# => 7

# digital_root(942)
# => 9 + 4 + 2
# => 15 ...
# => 1 + 5
# => 6

# digital_root(132189)
# => 1 + 3 + 2 + 1 + 8 + 9
# => 24 ...
# => 2 + 4
# => 6

# digital_root(493193)
# => 4 + 9 + 3 + 1 + 9 + 3
# => 29 ...
# => 2 + 9
# => 11 ...
# => 1 + 1
# => 2

# initial solution
# def digital_root(n)
#   num_array = n.to_s.split("").map { |item| item.to_i }
#   if num_array.length > 1
#     recurse = true
#   end
#   if recurse
#     total = num_array.reduce(:+)
#     digital_root(total)
#   else
#     num_array[0]
#   end
# end

# concise
def digital_root(n)
  n.digits.length > 1 ? digital_root(n.digits.sum) : n
end

p digital_root(493193)
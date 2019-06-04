# Your task is to make a function that can take any non-negative integer as a argument and 
# return it with its digits in descending order. Essentially, rearrange the digits to 
# create the highest possible number.

# Examples:
# Input: 21445 Output: 54421

# Input: 145263 Output: 654321

# Input: 1254859723 Output: 9875543221

# my initial solution [WHAT IS THIS? It's late. And it doesn't even work. Go to bed.]
def descending_order(n)
  (n.to_s.split("")).map { |num|
    num.to_i
  }.reverse.map{ |num|
    num.to_s
  }.join("").to_i
end

# 2nd attempt
def descending_order(n)
  n.to_s.split("").sort_by(&:to_i).reverse.join("").to_i
end

p descending_order(123456789)
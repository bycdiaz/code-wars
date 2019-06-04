# Welcome. In this kata, you are asked to square every digit of a number.

# For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

# Note: The function accepts an integer and returns an integer

# my initial solution
def square_digits num
  num.to_s.split('').map{ |num| ((num.to_i) ** 2).to_s }.join("").to_i
end

# top solution from codewars
# def square_digits num
#   num.to_s.chars.map{|x| x.to_i**2}.join.to_i
# end

p square_digits(3212)
# You have to create a function named reverseIt.

# Write your function so that in the case a string or a number is 
#   passed in as the data , you will return the data in reverse order. 
#   If the data is any other type, return it as it is.

# Examples of inputs and subsequent outputs:

# "Hello" -> "olleH"

# "314159" -> "951413"

# [1,2,3] -> [1,2,3]

def reverse_it(data)
  if data.is_a? String
    data.reverse
  elsif data.is_a? Numeric
    if data.is_a? Integer
    data.to_s.split("").reverse.join("").to_i
    elsif data.is_a? Float
      data.to_s.split("").reverse.join("").to_f
    end
  else
    data
  end
end

p reverse_it('Hello')
p reverse_it(314159)
p reverse_it(1.2)
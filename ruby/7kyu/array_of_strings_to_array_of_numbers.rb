# Some really funny web dev gave you an array of numbers from his API response as an array of strings!

# You need to cast the whole array to the correct type.

# Create the function

# Ruby: toNumberArray(array)
# that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.

# ie:["1", "2", "3"] to [1, 2, 3]

# Note that you can receive floats as well.

def to_number_array(string_array)
  string_array.map { |num| num.to_f }
end

p to_number_array(["1.1","2.2","3.3"])
# [1.1,2.2,3.3]
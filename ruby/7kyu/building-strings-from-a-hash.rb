# Complete the solution so that it takes the object (JavaScript/CoffeeScript) or 
# hash (ruby) passed in and generates a human readable string from its key/value 
# pairs.

# The format should be "KEY = VALUE". Each key/value pair should be separated by 
# a comma except for the last pair.

# Example:

# solution({"a" => 1, "b" => '2'}) # should return "a = 1,b = 2"

# my initial solution
# def solution(pairs)
#   pairs_array = []
#   pairs.each {|key, value| pairs_array << "#{key} = #{value}" }
#   pairs_array.join(",")
# end

# refactor
def solution(pairs)
  pairs.map{|k,v| "#{k} = #{v}"}.join(",")
end
p solution({"a" => 1, "b" => '2'})
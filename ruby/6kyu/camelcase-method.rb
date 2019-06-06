# Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) 
# for strings. All words must have their first letter capitalized without spaces.

# For instance:

# 'hello case'.camelcase => HelloCase
# 'camel case word'.camelcase => CamelCaseWord

# my initial solution
class String
  def camelcase
    split(" ").map { |word|
      word.capitalize
    }.join("")
  end
end

# refactored
class String
  def camelcase
    split(" ").map { |word| word.capitalize }.join("")
  end
end

p 'camel case method'.camelcase
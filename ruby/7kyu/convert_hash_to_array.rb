# Convert a hash into an array. Nothing more, Nothing less.

# {name: 'Jeremy', age: 24, role: 'Software Engineer'}

# should be converted into

# [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

def convert_hash_to_array(hash)
  result = []
  hash.map do |key,value|
    pair = []
    pair << key.to_s
    pair << value
    result << pair
  end
  result
end

p convert_hash_to_array({name: 'Jeremy', age: 24, role: 'Software Engineer'})
# [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
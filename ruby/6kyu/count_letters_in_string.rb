# In this kata, you've to count lowercase letters in a given string
# and return the letter count in a hash with 'letter' as key and
# count as 'value'. The key must be 'symbol' instead of string in
# Ruby and 'char' instead of string in Crystal.

# Example:

# letterCount('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}

# initial solution
# def letter_count(str)
#   count = Hash.new 0
#   str.split("").each do |char|
#     count[char] += 1
#   end
#   result = Hash.new
#   count.each do |key,value|
#     result [key.to_sym] = value
#   end
#   result.sort.to_h
# end

# concise-er solution
def letter_count(str)
  count = Hash.new 0
  str.split("").each do |char|
    count[char.to_sym] += 1
  end
  count.sort.to_h
end

p letter_count('codewars')
# {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1}

# p letter_count('activity')
# {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1}

# p letter_count('arithmetics')
# {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}
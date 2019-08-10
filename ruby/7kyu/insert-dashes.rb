# Write a function insertDash(num)/InsertDash(int num) that will insert 
# dashes ('-') between each two odd numbers in num. For example: if num 
# is 454793 the output should be 4547-9-3. Don't count zero as an odd 
# number.

def insert_dash(num)
  numbers = num.to_s.split("").map { |char| char.to_i}
  index = 0
  dashed = []

  while index < (numbers.length - 1) do
    if numbers[index].odd? && numbers[index + 1].odd?
      # puts "#{item} and #{numbers[index + 1]}"
      dashed << "#{numbers[index]}-"
    else
      dashed << numbers[index]
    end
    index += 1
  end

  dashed = dashed.push(numbers[-1])
  dashed.map { |item| item.to_s}.join("")

end

p insert_dash(454793)
# '4547-9-3'

# p insert_dash(123456)
# '123456'

# p insert_dash(1003567)
# '1003-567'

# p insert_dash(24680)
# '24680'

# p insert_dash(13579)
# '1-3-5-7-9'
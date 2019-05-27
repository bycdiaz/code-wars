# Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

def max_number(n)
  array = n.to_s.split("")
  num_array = []
  array.map { |item|
    num_array <<item.to_i
  }
  num_array.sort.reverse.join("").to_i
end

p max_number(213)
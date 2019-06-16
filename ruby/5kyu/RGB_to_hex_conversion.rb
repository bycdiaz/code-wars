# The rgb() method is incomplete. Complete the method so that passing in RGB 
# decimal values will result in a hexadecimal representation being returned. 
# The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values 
# that fall out of that range should be rounded to the closest valid value.

# The following are examples of expected output values:

# rgb(255, 255, 255) # returns FFFFFF
# rgb(255, 255, 300) # returns FFFFFF
# rgb(0,0,0) # returns 000000
# rgb(148, 0, 211) # returns 9400D3

# my initial solution
def rgb(r, g, b)
  rgb_color = []
  rgb_color << r
  rgb_color << g
  rgb_color << b
  rgb_color.map! do |item|
    if item < 0
      item = 0
    elsif item > 255
      item = 255
    else
      item
    end
  end
  rgb_color
  hex = []
  rgb_color.each do |pair|
    hex << pair.to_s(16)
  end
  hex.map do |item|
    if item.length == 1
      item * 2
    else
      item
    end
  end.join.upcase
end

p rgb(300, 255, 255)
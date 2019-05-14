# Given a string of digits, you should replace any digit below 5 
# with '0' and any digit 5 and above with '1'. Return the resulting string.

def fake_bin(str)
  str.split('').map{ |x| x.to_i < 5 ? 0 : 1 }.join
end

p fake_bin("45385593107843568")
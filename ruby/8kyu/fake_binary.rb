# Given a string of digits, you should replace any
# digit below 5 with '0' and any digit 5 and above
# with '1'. Return the resulting string.

def fake_bin(s)
  numbers = []
  s.split("").each { |num|
    numbers << num.to_i
    }
  result = []
  numbers.map do |num|
    if num < 5
      result << 0
    else
      result << 1
    end
  end

  result.map { |num| num.to_s}.join
end

p fake_bin('45385593107843568')
# '01011110001100111'

#p fake_bin('509321967506747')
# '101000111101101'

#p fake_bin('366058562030849490134388085')
# '011011110000101010000011011'
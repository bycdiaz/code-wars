# You are given a string of numbers between 0-9. Find the average of these numbers and 
# return it as a floored whole number (ie: no decimal places) written out as a string. 

# Eg:
# "zero nine five two" -> "four"

# If the string is empty or includes a number greater than 9, return "n/a"

def average_string(s)
  if s.empty?
    "n/a"
  else
    num_strings = s.split(" ")
    numbers = []
    num_strings.each { |num| 
      case num
      when "zero"
        numbers << 0
      when "one"
        numbers << 1
      when "two"
        numbers << 2
      when "three"
        numbers << 3
      when "four"
        numbers << 4
      when "five"
        numbers << 5
      when "six"
        numbers << 6
      when "seven"
        numbers << 7
      when "eight"
        numbers << 8
      when "nine"
        numbers << 9
      else
        numbers << "n/a"
      end
    }
    if numbers.include? "n/a"
      "n/a"
    else
      average = numbers.reduce(:+) / numbers.length
  
      case average
      when 0
        "zero"
      when 1
        "one"
      when 2
        "two"
      when 3
        "three"
      when 4
        "four"
      when 5
        "five"
      when 6
        "six"
      when 7
        "seven"
      when 8
        "eight"
      when 9
        "nine"
      else
        "n/a"
      end
    end
  end
end

p average_string("")
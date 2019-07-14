# The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

# Example:

# Split the below string into other strings of size #3

# 'supercalifragilisticexpialidocious'

# Will return a new string
# 'sup erc ali fra gil ist ice xpi ali doc iou s'
# Assumptions:

# String length is always greater than 0
# String has no spaces
# Size is always positive

# my initial VERY hacky solution
def split_in_parts(s, part_length)
  split_string = []
  s.chars.each_slice(part_length).each{ |set| split_string << set.join }
  final_string = ''
  split_string.each { |set| final_string << set + " " }
  final_string.rstrip
end

# top solution from codewars
# def split_in_parts (s, part_length)
#   s.chars.each_slice(part_length).map(&:join).join(' ')
# end

p split_in_parts("supercalifragilisticexpialidocious", 3)
# You come across a method for removing all odd numbers from an array

#removing all odd numbers from an array
# This method does not work as expected. Can you correct it

def remove_odd_numbers_from_array(a)
  a.select{ |n| n.even? }
end

p remove_odd_numbers_from_array([2,2,5,6,7,14,8,9,11,10,12])
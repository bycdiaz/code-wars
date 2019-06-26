# In this kata, we will make a function to test whether a period is late.

# Our function will take three parameters:

# last - The Date object with the date of the last period

# today - The Date object with the date of the check

# cycleLength - Integer representing the length of the cycle in days

# If the today is later from last than the cycleLength, the function should 
# return true. We consider it to be late if the number of passed days is 
# larger than the cycleLength. Otherwise return false.

require 'date'

def period_is_late(last,today,cycle_length)
  today - last > cycle_length
end

# p period_is_late(DateTime.new(2016, 6, 13), DateTime.new(2016, 7, 16), 35)
# false

# p period_is_late(DateTime.new(2016, 6, 13), DateTime.new(2016, 7, 16), 28)
# true

# p period_is_late(DateTime.new(2016, 6, 13), DateTime.new(2016, 7, 16), 35)
# false

# p period_is_late(DateTime.new(2016, 6, 13), DateTime.new(2016, 6, 29), 28), false)
# p period_is_late(DateTime.new(2016, 7, 12), DateTime.new(2016, 8, 9), 28), false)
# p period_is_late(DateTime.new(2016, 7, 12), DateTime.new(2016, 8, 10), 28), true)
# p period_is_late(DateTime.new(2016, 7, 1), DateTime.new(2016, 8, 1), 30), true)
# p period_is_late(DateTime.new(2016, 6, 1), DateTime.new(2016, 6, 30), 30), false)
# p period_is_late(DateTime.new(2016, 1, 1), DateTime.new(2016, 1, 31), 30), false)
# p period_is_late(DateTime.new(2016, 1, 1), DateTime.new(2016, 2, 1), 30), true)
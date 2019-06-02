# After calling the function findSum() with any number of non-negative integer arguments, 
# it should return the sum of all those arguments. If no arguments are given, the 
# function should return 0, if negative arguments are given, it should return -1.

# eg

# find_sum(1,2,3,4); # returns 10 
# find_sum(1,-2);    # returns -1 
# find_sum();        # returns 0 0 

def find_sum(*args)
  if args.empty?
    0
  elsif args.any? { |item| item.length < 0 }
    -1
  else
    args.reduce(:+)
  end
end

p find_sum(1,2,3,4)
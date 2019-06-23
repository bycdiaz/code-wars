# Given an array, find the int that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

def find_it(seq)
  counts = Hash.new(0)
  seq.each do |item|
    counts[item] += 1
  end
  odd = []
  counts.select { |k,v| 
    if v.odd?
      odd << k
    end
  }
  odd[0]
end

p find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
# 5

# p find_it([1,1,2,-2,5,2,4,4,-1,-2,5])
# -1
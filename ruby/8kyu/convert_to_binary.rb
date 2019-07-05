# Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

def to_binary(n)
  n.to_s(2).to_i
end

# to_binary(1)  # should return 1
# to_binary(5)  # should return 101
p to_binary(11) # should return 1011
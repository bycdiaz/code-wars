# Check that the two provided arrays both contain the same number of
# different unique items, regardless of order. For example in the
# following:

# [a,a,a,a,b,b] and [c,c,c,d,c,d]
# Both arrays have four of one item and two of another, so balance
# should return true.

def balance(arr1, arr2)
  arr1.map { | i | arr1.count(i) }.sort == arr2.map { | i | arr2.count(i) }.sort
end

# p balance(["a","a","a","a","a","b","b","b"],["c","c","c","c","c","d","d","d"])
# true

p balance(["a","a"],["c"])
# false

# p balance(["a","b","c","d","e","f","g","g"],["h","h","i","j","k","l","m","n"])
# true

# p balance(["a"],["c"])
# true

# p balance(["a","b","c","d","e","f","g","g"],["h","h","i","j","k","l","m","m"])
# false
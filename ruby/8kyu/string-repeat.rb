# Write a function called repeatStr which repeats the given string string exactly n times.

# repeatStr(6, "I") // "IIIIII"
# repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


def repeat_str (n, s)
  s * n
end

puts repeat_str(6, "I")
puts repeat_str(5, "Hello")
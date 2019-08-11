# Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

def is_palindrome(str)
  str.downcase == str.downcase.reverse
end

# p is_palindrome("a")
# true

# p is_palindrome("aba")
# true

# p is_palindrome("Abba")
# true

# p is_palindrome("hello")
# false

# p is_palindrome("Bob")
# true

# p is_palindrome("Madam")
# true

# p is_palindrome("AbBa")
# true

p is_palindrome("")
# true
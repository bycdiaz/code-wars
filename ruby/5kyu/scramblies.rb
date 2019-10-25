# Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

# Notes:

#     Only lower case letters will be used (a-z). No punctuation or digits will be included.
#     Performance needs to be considered

# Input strings s1 and s2 are null terminated.

# Examples

# scramble('rkqodlw', 'world') ==> True
# scramble('cedewaraaossoqqyt', 'codewars') ==> True
# scramble('katas', 'steak') ==> False

def scramble(s1,s2)
  s2.chars.uniq.all?{|x| s2.count(x)<=s1.count(x)}
end

# p scramble('rkqodlw','world')
# true

# p scramble('cedewaraaossoqqyt','codewars')
# true

# p scramble('katas','steak')
# false

# p scramble('scriptjava','javascript')
# true

# p scramble('scriptingjava','javascript')
# true
# Find the first character that repeats in a String and return that character.

# first_dup('tweet') => 't'
# first_dup('like') => nil
# This is not the same as finding the character that repeats first. In that
# case, an input of 'tweet' would yield 'e'.

def first_dup(s)
  if s.split("").sort.uniq == s.split("").sort
    nil
  else
    count = Hash.new 0

    s.split("").each do |item|
      count[item] += 1
    end
    count = count.sort_by { |key,value| value }.reverse.to_h

    indexes = Hash.new

    count.each do |key,value|
      if value > 1
        indexes[key] = s.index(key)
      end
    end
    indexes.min_by { |key,value| value}[0]
  end
end

# p first_dup('tweet')
# 't'

# p first_dup('Ode to Joy')
# ' '

# p first_dup('ode to joy')
# 'o'

# p first_dup('bar')
# nil

# p first_dup('123123')
# '1'

# p first_dup('!@#$!@#$')
# '!'

# p first_dup('1a2b3a3c')
# 'a'
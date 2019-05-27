# Numbers ending with zeros are boring.

# They might be fun in your world, but not here.

# Get rid of them. Only the ending ones.

# 1450 -> 145
# 960000 -> 96
# 1050 -> 105
# -1050 -> -105
# Zero alone is fine, don't worry about it. Poor guy anyway

def no_boring_zeros(num)
  if num == 0
    num
  else
    stringed_num = num.to_s
    while stringed_num.end_with?("0")
      stringed_num = stringed_num.chop
    end
    stringed_num.to_i
  end
end


p no_boring_zeros(1450)
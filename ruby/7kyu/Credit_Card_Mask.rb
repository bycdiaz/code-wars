# Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret
# question is still correct. However, since someone could look over your shoulder, you don't want that shown on your
# screen. Instead, we mask it.

# Your task is to write a function maskify, which changes all but the last four characters into '#'.
# Examples

# maskify('4556364607935616') # should return '############5616'
# maskify('64607935616')      # should return '#######5616'
# maskify('1')                # should return '1'
# maskify('')                 # should return ''

# # "What was the name of your first pet?"
# maskify('Skippy')                                   # should return '##ippy'
# maskify('Nananananananananananananananana Batman!') # should return '####################################man!'

def maskify(cc)
  if cc.length <= 4
    cc
  elsif cc == ''
    ''
  else
    visible_chars = cc[-4..-1]
    masked_char_number = cc.split("")[0...-4].length
    ('#' * masked_char_number) + visible_chars
  end
end

# p maskify('1')
# p maskify('')
p maskify('4556364607935616')
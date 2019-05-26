# Write a function which removes from string all non-digit characters and parse the remaining 
# to number. E.g: "hell5o wor6ld" -> 56

def get_number_from_string(s)
  s.tr('^0-9', '').to_i
end

p get_number_from_string("one1 two2 three3 four4 five5")
p get_number_from_string("hell5o wor6ld")

p get_number_from_string("no numbers here")
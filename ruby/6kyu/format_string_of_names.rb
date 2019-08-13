# Given: an array containing hashes of names

# Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

# Example:

# list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
# # returns 'Bart, Lisa & Maggie'

# list([ {name: 'Bart'}, {name: 'Lisa'} ])
# # returns 'Bart & Lisa'

# list([ {name: 'Bart'} ])
# # returns 'Bart'

# list([])
# # returns ''

def list(names)
  names_only = []
  names.each { |hash|
    names_only << hash[:name]
  }
  names_only
  if names_only.length >= 3
    names_only.join(", ").reverse.sub(" ,", " & ").reverse
  elsif names_only.length == 2
    "#{names_only[0]} & #{names_only[1]}"
  elsif names_only.length == 1
    names_only[0]
  else
    ""
  end
end

# p list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
p list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
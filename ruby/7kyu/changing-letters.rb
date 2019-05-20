# When provided with a String, capitalize all vowels

# For example:

# Input : "Hello World!"

# Output : "HEllO WOrld!"

def swap(st)
  st.tr("aeiou","AEIOU")
end

p swap("HelloWorld!")
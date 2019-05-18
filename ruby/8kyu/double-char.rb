# Given a string, you have to return a string in which each character 
# (case-sensitive) is repeated once.

# double_char("String") ==> "SSttrriinngg"

# double_char("Hello World") ==> "HHeelllloo  WWoorrlldd"

# double_char("1234!_ ") ==> "11223344!!__  "

# initial solution
def double_char(str)
  newString = str.split("")
  (newString.map { |char| char + char }).join
end

# top codewars solution
# def double_char(str)
#   str.chars.map{|x| x*2}.join
# end

p double_char("abc")
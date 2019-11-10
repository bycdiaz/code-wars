# You have to sort the inner content of every word of a string in descending order.
# The inner content is the content of a word without first and the last char.

# Some examples:

# "sort the inner content in descending order" -> "srot the inner ctonnet in dsnnieedcg oredr"
# "wait for me" -> "wiat for me"
# "this kata is easy" -> "tihs ktaa is esay"
# The string will never be null and will never be empty.
# It will contain only lowercase-letters and whitespaces.

def sort_the_inner_content(words)
  result = []
  
  words.split(" ").each do |word|
    new_string = []
    if word.length > 3
      new_string << word[0]
      new_string << word[1..-2].split("").sort.reverse.join("")
      new_string << word[-1]
    else
      new_string << word
    end
    result << new_string
  end
  result.map { |array| array.join("") }.join(" ")
end

# p sort_the_inner_content("sort the inner content in descending order")
# "srot the inner ctonnet in dsnnieedcg oredr"

# p sort_the_inner_content("wait for me")
# "wiat for me"

# p sort_the_inner_content("this kata is easy")
# "tihs ktaa is esay"
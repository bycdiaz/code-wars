# Your task
# You are given a dictionary/hash/object containing some 
# languages and your test results in the given languages. 
# Return the list of languages where your test score is at 
# least 60, in descending order of the results.

# Note: There will be no duplicate values.

# Examples
# {"Java" => 10, "Ruby" => 80, "Python" => 65}  --> ["Ruby", "Python"]
# {"Hindi" => 60, "Dutch" => 93, "Greek" => 71} --> ["Dutch", "Greek", "Hindi"]
# {"C++" => 50, "ASM" => 10, "Haskell" => 20}   --> []

# my initial solution
# def my_languages(results)
#   sorted_hash = results.sort_by { |k,v| v }.reverse.to_h

#   languages = []
#   sorted_hash.each { |k,v|
#     if v >= 60
#       languages << k
#     end
#   }
#   languages
# end

# refactored
def my_languages(results)
  sorted_hash = results.sort_by { |k,v| v }.reverse.to_h

  languages = []
  sorted_hash.each { |k,v|
    v >= 60 ? languages << k : nil
  }
  languages
end

p my_languages({"Hindi" => 60, "Dutch" => 93, "Greek" => 71})
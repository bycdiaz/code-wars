# The idea for this Kata came from 9gag today.here

# You'll have to translate a string to Pilot's
# alphabet (NATO phonetic alphabet) wiki.

# Like this:

# ** Input: ** If you can read

# ** Output: ** India Foxtrot Yankee Oscar Uniform
# Charlie Alfa November Romeo Echo Alfa Delta

# ** Some notes **

#     Keep the punctuation, and remove the spaces.
#     Use Xray without dash or space.



def to_nato(words)
  alphabet = ["Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "Xray", "Yankee", "Zulu"]
  characters = []
  words.split("").each do |word|
    if word != " "
      characters << word[0].upcase
    end
  end
  translation = []
  characters
  characters.each do |char|
    if char == "!" || char == "." || char == "?"
      translation << char
    else
      alphabet.each do |word|
        if word.start_with?(char)
          translation << word
        end
      end
    end
  end
  translation.join(" ")
end

# p to_nato('If you can read')
# "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"

p to_nato('Did not see that coming!')
# "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"
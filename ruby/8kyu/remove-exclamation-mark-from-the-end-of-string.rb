# Description:
# Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input 
# data is always a string, no need to verify it.

# Examples
# remove("Hi!") === "Hi"
# remove("Hi!!!") === "Hi!!"
# remove("!Hi") === "!Hi"
# remove("!Hi!") === "!Hi"
# remove("Hi! Hi!") === "Hi! Hi"
# remove("Hi") === "Hi"

# initial solution
def remove(s)
  split_s = s.split("")
  if split_s[-1] == "!"
    split_s.pop
  end
  split_s.join("")
end


p remove("Hi!")
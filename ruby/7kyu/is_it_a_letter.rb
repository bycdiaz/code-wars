# Implement String#letter? (Ruby), StringUtils.isLetter(String) (Java), String.prototype.isLetter() 
# (JavaScript) or letter? (Clojure), which should return true if given object is a single ASCII 
# letter (lower or upper case), false otherwise.

class String
  def letter?
    /\A[a-z]\z/i === self
  end
end

p "12de".letter?
# Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within
# the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred
# to as Pascal case).

def to_camel_case(str)
  if str != ""
    if str[0] == str[0].downcase
      result = str.split(/[-_]/).map { |word| word.downcase.capitalize }.join
      result[0] = result[0].downcase
      result
    else
      str.split(/[-_]/).map { |word| word.downcase.capitalize }.join
    end
  else
    str
  end
end

p to_camel_case("the-stealth-warrior")
# returns "theStealthWarrior"

p to_camel_case("The_Stealth_Warrior")
# returns "TheStealthWarrior"

p to_camel_case('the_stealth_warrior')
# Expected: "theStealthWarrior", instead got: "TheStealthWarrior"

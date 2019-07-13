# Given String str, return:

# How much "e" does it contains (case-insensitive) - return number as String.
# If given String doesn't contain any "e", return: `"There is no "e"."`
# If given String is empty, return empty String.
# If given String is `null`/`None`/`nil`, return `null`/`None`/`nil`

def find_e(s)

  if s == ""
    ""
  elsif s == nil
    nil
  else 
    s = s.downcase.split("")
    e_count = []
    s.each { |item|
      if item == 'e'
        e_count << item
      end
    }

    if e_count.length == 0
      'There is no "e".'
    else
      (e_count.length).to_s
    end
  end
end

p find_e("English")
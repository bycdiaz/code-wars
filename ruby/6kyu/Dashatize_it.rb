# Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.
#
# Ex:
#
# dashatize(274) -> '2-7-4'
# dashatize(6815) -> '68-1-5'

def dashatize(num)
  if num == nil
    "nil"
  else
    result = num.to_s.split("").map { |num|
      if (num.to_i).odd?
        "-#{num}-"
      else
        num
      end
    }.join
    if (result.include? "--") || (result.include? "---") || (result.include? "----")
      result = result.gsub("----", '-')
      result = result.gsub("---", '-')
      result = result.gsub("--", '-')
    end
    if result[0] == "-" || result[-1] == "-"
      if result[0] == "-"
        result[0] = ''
      end
      if result[-1] == "-"
        result[-1] = ''
      end
      result
    else
      result
    end
  end
end

# p dashatize(274)
# "2-7-4"

# p dashatize(5311)
# "5-3-1-1"

# p dashatize(86320)
# "86-3-20"

# p dashatize(974302)
# "9-7-4-3-02"


# p dashatize(nil)
# "nil"

# p dashatize(0)
# "0"

# p dashatize(-1)
# "1"

# p dashatize(-28369)
# "28-3-6-9"

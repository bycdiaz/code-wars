# The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form
# that will tell prospective members which category they will be placed.
#
# To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from
# -2 to +26; the better the player the lower the handicap.
# Input
#
# Input will consist of a list of lists containing two items each. Each list contains information for a single potential member.
# Information consists of an integer for the person's age and an integer for the person's handicap.
#
# Note for F#: The input will be of (int list list) which is a List<List>
# Example Input
#
# [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
#
# Output
#
# Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in
# the senior or open category.
# Example Output
#
# ["Open", "Open", "Senior", "Open", "Open", "Senior"]

# initial solution
# def openOrSenior(data)
#   categories = []
#   data.each do |pair|
#     if pair[0] >= 55
#       if pair[1] > 7
#         categories << "Senior"
#       else
#         categories << "Open"
#       end
#     else
#       categories << "Open"
#     end
#   end
#   categories
# end

# 2nd attempt
def openOrSenior(data)
  data.map { |pair| pair[0] >= 55 && pair[1] > 7 ? "Senior" : "Open" }
end

p openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])
# ['Open', 'Senior', 'Open', 'Senior']

# p openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])
# ['Open', 'Open', 'Open', 'Open']

# p openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])
# ['Senior', 'Open', 'Open', 'Open']

# p openOrSenior([[16, 23],[73,1],[56, 20],[1, -1]])
# ['Open', 'Open', 'Senior', 'Open']

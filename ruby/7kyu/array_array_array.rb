# You are given an initial 2-value array (x). You will use this to calculate a score.

# If both values in (x) are numbers, the score is the sum of the two. If only one is 
# a number, the score is that number. If neither is a number, return 'Void!'.

# Once you have your score, you must return an array of arrays. Each sub array will 
# be the same as (x) and the number of sub arrays should be equal to the score.

# For example:

# if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

def explode arr
  if (arr[0].is_a? Integer) && (arr[1].is_a? Integer)
    score = arr[0] + arr[1]
    result = []
    score.times do
      result << arr
    end
    result
  elsif (arr[0].is_a? Integer) || (arr[1].is_a? Integer)
    if (arr[0].is_a? Integer)
      score = arr[0]
      result = []
      score.times do
        result << arr
      end
      result
    else
      score = arr[1]
      result = []
      score.times do
        result << arr
      end
      result
    end
  else
    'Void!'
  end
end

# p explode([9, 3])
# p explode(['a', 3])
# p explode(['a', 'v'])
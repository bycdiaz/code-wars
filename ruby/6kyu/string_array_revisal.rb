# In this Kata, you will be given an array of strings and your task is to remove
# all consecutive duplicate lettersfrom each string in the array.

# For example:

#     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

#     dup(["kelless","keenness"]) = ["keles","kenes"].

# Strings will be alphabet characters only. Don't worry about lower and upper case.
# See test cases for more examples. 

def dup(arr)
  arr.map { |string| string.squeeze }
end

p dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])
# ['codewars','picaniny','hubububo']

# p dup(["abracadabra","allottee","assessee"])
# ['abracadabra','alote','asese']

# p dup(["kelless","keenness"])
# ['keles','kenes']

# p dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"])
# ['Wolomolo','flodoromonlighters','chuchchi']

# p dup(["adanac","soonness","toolless","ppellee"])
# ['adanac','sones','toles','pele']

# p dup(["callalloo","feelless","heelless"])
# ['calalo','feles','heles']

# p dup(["putteellinen","keenness"])
# ['putelinen','kenes']

# p dup(["kelless","voorraaddoosspullen","achcha"])
# ['keles','voradospulen','achcha']
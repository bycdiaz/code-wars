# Create a method args_count, that returns the count of passed arguments

# args_count(1, 2, 3) -> 3
# args_count(1, 2, 3, a: 10) -> 4

def args_count(*args)
  args_array = args.to_a
  new_array = []
  args_array.each { |arg|
    if arg.is_a?(Hash)
      new_array << arg.to_a
    else
      new_array << arg
    end
  }
  (new_array.flatten(1)).length
end
p args_count(1, 2, a: 1, b: 2)
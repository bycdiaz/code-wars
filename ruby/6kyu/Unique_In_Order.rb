# Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any 
# elements with the same value next to each other and preserving the original order of elements.

def unique_in_order(iterable)
  
  if iterable[0].is_a? (String)
    if iterable.kind_of?(Array)
      iterable
    else
      iterable = iterable.split("")
    end

    iterable.each_with_index { |item,index|
      if iterable[index] == iterable[index + 1]
        iterable.delete_at(index)
        if iterable == iterable.uniq
          iterable
        else
          unique_in_order(iterable)
        end
      end
    }
  elsif iterable[0].is_a? (Integer)
    iterable.each_with_index { |item,index|
      if iterable[index] == iterable[index + 1]
        iterable.delete_at(index)
        if iterable == iterable.uniq
          iterable
        else
          unique_in_order(iterable)
        end
      end
    }
  else
    []
  end
end

# p unique_in_order('AAAABBBCCDAABBB')
# ['A', 'B', 'C', 'D', 'A', 'B']

# p unique_in_order('ABBCcAD')
# ['A', 'B', 'C', 'c', 'A', 'D']

p unique_in_order([1,2,2,3,3])
# [1,2,3]
# generate a function that computes the series starting from 0 and 
# ending until the given number following the sequence

class SequenceSum
  def self.show_sequence(n)
    if n == 0
      "0=0"
    elsif n < 0
      "#{n}<0"
    else
      sequence_array = []
      (0..n).to_a.each { |num| sequence_array << num }
      sequence_array.join("+") + " = #{sequence_array.reduce(:+)}"
    end
  end
end

p SequenceSum.show_sequence(6)
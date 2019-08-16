# Fix the bug so we can all go home early.

class Dinglemouse
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end
  def get_full_name
    if @first_name != "" && @last_name != ""
      @first_name + " " + @last_name
    elsif @first_name == "" && @last_name != ""
      @last_name
    elsif @first_name != "" && @last_name == ""
      @first_name
    else
      ""
    end
  end
end

puts carlos = Dinglemouse.new('Carlos','Diaz').get_full_name

class Sleigh
  def authenticate(name, password)
    name == "Santa Claus" && password == "Ho Ho Ho!" ? true : false
  end
end

carlos = Sleigh.new
santa = Sleigh.new

p carlos.authenticate("Carlos","123")

p santa.authenticate("Santa Claus", "Ho Ho Ho!")
# Rock Paper Scissors
# Let's play! You have to return which player won! In case of a draw return Draw!.

# Examples:

# rps('scissors','paper') // Player 1 won!
# rps('scissors','rock') // Player 2 won!
# rps('paper','paper') // Draw!

def rps(p1, p2)
  if p1 == 'rock'
    if p2 == 'paper'
      'Player 2 won!'
    elsif p2 == 'scissors'
      'Player 1 won!'
    else
      'Draw!'
    end
  elsif p1 == 'paper'
    if p2 == 'rock'
      'Player 1 won!'
    elsif p2 == 'scissors'
      'Player 2 won!'
    else
      'Draw!'
    end
  elsif p1 == 'scissors'
    if p2 == 'rock'
      'Player 2 won!'
    elsif p2 == 'paper'
      'Player 1 won!'
    else
      'Draw!'
    end

  end
end

p rps('rock', 'scissors')
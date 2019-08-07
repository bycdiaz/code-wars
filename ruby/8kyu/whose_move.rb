# Two players - "black" and "white" are playing a game. The game consists of several rounds. 
# If a player wins in a round, he is to move again during the next round. If a player loses 
# a round, it's the other player who moves on the next round. Given whose turn it was on 
# the previous round and whether he won, determine whose turn it is on the next round.

# initial solution
def whose_move(last_player, win)
  if (last_player == 'black' && win == false) || (last_player == 'white' && win == true)
    'white'
  else
    'black'
  end
end

# concise
def whose_move(last_player, win)
  black_loss = (last_player == 'black') && (win == false)
  white_win = (last_player == 'white') && (win == true)
  (black_loss) || (white_win) ? 'white' : 'black'
end
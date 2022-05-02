export const rps = (player1: string, player2: string) => {
  const results: { [index: string]: string } = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  }
  if (player1 === player2) {
    return 'Draw!';
  }
  return player2 === results[player1] ? "Player 1 won!" : "Player 2 won!";
}

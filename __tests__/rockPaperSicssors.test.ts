import { rps } from '../challenges/rockPaperSicssors'

describe('rock paper scissors', function() {
  const getMsg = (n: number) => `Player ${n} won!`;

  it('player 1 win', function() {
    expect(rps('rock', 'scissors')).toBe(getMsg(1));
    expect(rps('scissors', 'paper')).toBe(getMsg(1));
    expect(rps('paper', 'rock')).toBe(getMsg(1));
  });

  it('player 2 win', function() {
    expect(rps('scissors', 'rock')).toBe(getMsg(2));
    expect(rps('paper', 'scissors')).toBe(getMsg(2));
    expect(rps('rock', 'paper')).toBe(getMsg(2));
  });

  it('draw', function() {
    expect(rps('rock', 'rock')).toBe('Draw!');
    expect(rps('scissors', 'scissors')).toBe('Draw!');
    expect(rps('paper', 'paper')).toBe('Draw!');
  });
});

/*
Given a board of NxN, distributed with tiles labeled 0 to N² - 1(inclusive):

A solved grid will have the tiles in order of label, left to right, top to bottom.

Return true if the board state is currently solved, and false if the board state is unsolved.

Input will always be a square 2d array.

For example, a 2x2 solved grid:

[ [0, 1],
  [2, 3] ]
A 2x2 unsolved grid:

[ [2, 1],
  [0, 3] ]
*/
function isSolved(board) {
  let correct = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== correct) return false;

      correct++;
    }
  }
  return true;
}
console.log(
  isSolved([
    [0, 1],
    [2, 3],
  ])
);

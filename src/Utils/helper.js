export function checkWin(grid, player) {
  //  horizontale
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col <= grid[row].length - 4; col++) {
      if (
        grid[row][col] === player &&
        grid[row][col + 1] === player &&
        grid[row][col + 2] === player &&
        grid[row][col + 3] === player
      ) {
        return true;
      }
    }
  }

  //  verticale
  for (let row = 0; row <= grid.length - 4; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (
        grid[row][col] === player &&
        grid[row + 1][col] === player &&
        grid[row + 2][col] === player &&
        grid[row + 3][col] === player
      ) {
        return true;
      }
    }
  }

  //  diagonale bas à droite
  for (let row = 0; row <= grid.length - 4; row++) {
    for (let col = 0; col <= grid[row].length - 4; col++) {
      if (
        grid[row][col] === player &&
        grid[row + 1][col + 1] === player &&
        grid[row + 2][col + 2] === player &&
        grid[row + 3][col + 3] === player
      ) {
        return true;
      }
    }
  }

  // diagonale bas à gauche
  for (let row = 0; row <= grid.length - 4; row++) {
    for (let col = 3; col < grid[row].length; col++) {
      if (
        grid[row][col] === player &&
        grid[row + 1][col - 1] === player &&
        grid[row + 2][col - 2] === player &&
        grid[row + 3][col - 3] === player
      ) {
        return true;
      }
    }
  }

  return false;
}

export function checkEquality(grid) {
  const checkRowsIsNull = grid.flatMap((value, index) =>
    value.every((value) => value !== null),
  );

  return checkRowsIsNull.every((value) => value === true);
}

export const updateGrid = (grid, col, player) => {
  for (let row = grid.length - 1; row >= 0; row--) {
    if (grid[row][col] === null) {
      grid[row][col] = player;
      break;
    }
  }
};

export const isFullColumn = (grid, col) => {
  for (let row = 0; row <= grid.length - 1; row++) {
    if (grid[row][col] === null) {
      return false;
    }
  }
  return true;
};

export const createGrid = (numRows, numCols, initialValue = null) => {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }).fill(initialValue),
  );
};

import React from "react";
import styled from "styled-components";
import { useGrid } from "../../Context/useGrid";

const CellDiv = styled.td`
  width: 100px;
  height: 100px;
  border: 2px solid #fff;
  text-align: center;
  background-color: navy;
`;

export const Token = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 100%;
  background-color: ${(props) => props.color};
`;

function checkWin(grid, player) {
  // Vérification horizontale
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col <= grid[row].length - 4; col++) {
      if (
        grid[row][col] === player &&
        grid[row][col + 1] === player &&
        grid[row][col + 2] === player &&
        grid[row][col + 3] === player
      ) {
        return true; // Combinaison horizontale gagnante
      }
    }
  }

  // Vérification verticale
  for (let row = 0; row <= grid.length - 4; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (
        grid[row][col] === player &&
        grid[row + 1][col] === player &&
        grid[row + 2][col] === player &&
        grid[row + 3][col] === player
      ) {
        return true; // Combinaison verticale gagnante
      }
    }
  }

  // Vérification diagonale (vers le bas à droite)
  for (let row = 0; row <= grid.length - 4; row++) {
    for (let col = 0; col <= grid[row].length - 4; col++) {
      if (
        grid[row][col] === player &&
        grid[row + 1][col + 1] === player &&
        grid[row + 2][col + 2] === player &&
        grid[row + 3][col + 3] === player
      ) {
        return true; // Combinaison diagonale (vers le bas à droite) gagnante
      }
    }
  }

  // Vérification diagonale (vers le bas à gauche)
  for (let row = 0; row <= grid.length - 4; row++) {
    for (let col = 3; col < grid[row].length; col++) {
      if (
        grid[row][col] === player &&
        grid[row + 1][col - 1] === player &&
        grid[row + 2][col - 2] === player &&
        grid[row + 3][col - 3] === player
      ) {
        return true; // Combinaison diagonale (vers le bas à gauche) gagnante
      }
    }
  }

  return false; // Aucune combinaison gagnante trouvée
}

const updateGrid = (grid, col, player) => {
  for (let row = grid.length - 1; row >= 0; row--) {
    if (grid[row][col] === null) {
      grid[row][col] = player;
      break;
    }
  }
};

const isFullColumn = (grid, col) => {
  for (let row = 0; row <= grid.length - 1; row++) {
    if (grid[row][col] === null) {
      return false;
    }
  }
  return true;
};

const Cell = ({ row, col }) => {
  const {
    setGrid,
    grid,
    player,
    setPlayer,
    setWinner,
    scoreP0,
    scoreP1,
    setScoreP0,
    setScoreP1,
  } = useGrid();

  const handleClick = () => {
    if (checkWin(grid, player)) {
      return;
    }

    const copyGrid = [...grid];

    const isFull = isFullColumn(grid, col);

    if (isFull === false) {
      updateGrid(copyGrid, col, player);
      setGrid(copyGrid);

      if (checkWin(copyGrid, player)) {
        if (player === 0) {
          setScoreP0(scoreP0 + 1);
        }
        if (player === 1) {
          setScoreP1(scoreP1 + 1);
        }

        setWinner(player);
      } else {
        setPlayer(player === 0 ? 1 : 0);
      }
    }
  };

  return (
    <CellDiv onClick={handleClick}>
      {" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        {grid[row][col] === 0 && <Token color="red" size="80px" />}{" "}
        {grid[row][col] === 1 && <Token color="yellow" size="80px" />}{" "}
      </div>{" "}
    </CellDiv>
  );
};

export default Cell;

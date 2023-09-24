import React from "react";
import styled from "styled-components";
import { useGrid } from "../../Context/useGrid";
import {
  checkEquality,
  checkWin,
  isFullColumn,
  updateGrid,
} from "../../Utils/helper";
import { player1Configs, player2Configs } from "../../constant";

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
    setDraw,
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

      if (checkEquality(grid)) {
        setDraw(true);
        return;
      }
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {grid[row][col] === 0 && (
          <Token color={player1Configs.color} size="80px" />
        )}{" "}
        {grid[row][col] === 1 && (
          <Token color={player2Configs.color} size="80px" />
        )}{" "}
      </div>{" "}
    </CellDiv>
  );
};

export default Cell;

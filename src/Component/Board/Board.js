import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Cell, { Token } from "../Cell/Cell";
import { useGrid } from "../../Context/useGrid";

const Table = styled.table`
  border-collapse: collapse;
`;

const Board = () => {
  const { grid, winner, player } = useGrid();

  const memoizedGrid = useMemo(() => {
    return grid.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {" "}
        {row.map((_, colIndex) => (
          <Cell key={colIndex} row={rowIndex} col={colIndex} />
        ))}{" "}
      </tr>
    ));
  }, [grid]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        {" "}
        {winner !== null
          ? "The winner is player"
          : "It 's the player' s turn"}{" "}
        <Token color={player === 0 ? "red" : "yellow"} size="20px" />
      </div>{" "}
      <Table>
        <tbody> {memoizedGrid} </tbody>{" "}
      </Table>{" "}
    </div>
  );
};

export default Board;

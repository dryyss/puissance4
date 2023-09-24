import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Cell, { Token } from "../Cell/Cell";
import { useGrid } from "../../Context/useGrid";
import { player1Configs, player2Configs } from "../../constant";

const Table = styled.table`
  border-collapse: collapse;
`;

const initialState = "player' s turn";

const Board = () => {
  const { grid, winner, draw, player } = useGrid();
  const [message, setMessage] = useState(initialState);

  useEffect(() => {
    if (winner !== null) {
      setMessage("The winner is player");
    } else if (draw === true) {
      setMessage("Tie!!!");
    } else {
      setMessage(initialState);
    }
  }, [winner, draw]);

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
        {message}{" "}
        {!draw && (
          <Token
            color={player === 0 ? player1Configs.color : player2Configs.color}
            size="20px"
          />
        )}{" "}
      </div>{" "}
      <Table>
        <tbody> {memoizedGrid} </tbody>{" "}
      </Table>{" "}
    </div>
  );
};

export default Board;

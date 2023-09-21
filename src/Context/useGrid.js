import { createContext, useContext, useState } from "react";

const numRows = 6;
const numCols = 7;
const initialValue = null;

const createGrid = () => {
  return Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }).fill(initialValue)
  );
};

const GridContext = createContext(createGrid());

export const GridProvider = ({ children }) => {
  const [grid, setGrid] = useState(createGrid());
  const [player, setPlayer] = useState(0);
  const [winner, setWinner] = useState(null);
  const [scoreP0, setScoreP0] = useState(0);
  const [scoreP1, setScoreP1] = useState(0);
  const [draw, setDraw] = useState(false);

  const reset = () => {
    setGrid(createGrid());
    setPlayer(0);
    setWinner(null);
    setDraw(false);
  };

  return (
    <GridContext.Provider
      value={{
        grid,
        setGrid,
        player,
        setPlayer,
        winner,
        setWinner,
        reset,
        scoreP0,
        setScoreP0,
        scoreP1,
        setScoreP1,
        draw,
        setDraw,
      }}
    >
      {" "}
      {children}{" "}
    </GridContext.Provider>
  );
};

export const useGrid = () => {
  const context = useContext(GridContext);

  if (!context) {
    throw new Error("useGridErrorProvider");
  }
  return context;
};

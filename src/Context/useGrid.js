import { createContext, useContext, useState } from "react";
import { createGrid } from "../Utils/helper";

const GridContext = createContext(createGrid(6, 7));

export const GridProvider = ({ children }) => {
  const [grid, setGrid] = useState(createGrid(6, 7));
  const [player, setPlayer] = useState(0);
  const [winner, setWinner] = useState(null);
  const [scoreP0, setScoreP0] = useState(0);
  const [scoreP1, setScoreP1] = useState(0);
  const [draw, setDraw] = useState(false);

  const reset = () => {
    setGrid(createGrid(6, 7));
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

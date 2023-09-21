import React from "react";
import { useGrid } from "../../Context/useGrid";

const Score = () => {
  const { scoreP0, scoreP1 } = useGrid();

  return (
    <div>
      <p>
        {" "}
        Red {scoreP0} - Yellow {scoreP1}{" "}
      </p>{" "}
    </div>
  );
};

export default Score;

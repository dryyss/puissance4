import React from "react";
import { useGrid } from "../../Context/useGrid";
import styled from "styled-components";

const ScoreContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  width: 200px;
  margin: 20px auto;
`;

const ScoreText = styled.p`
  font-size: 18px;
  margin: 0;
`;

const Score = () => {
  const { scoreP0, scoreP1 } = useGrid();

  return (
    <ScoreContainer>
      <ScoreText>
        Red {scoreP0} - Yellow {scoreP1}{" "}
      </ScoreText>{" "}
    </ScoreContainer>
  );
};

export default Score;

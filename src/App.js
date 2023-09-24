import styled from "styled-components";
import Board from "./Component/Board/Board";
import Score from "./Component/Score/Score";
import { useGrid } from "./Context/useGrid";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const ResetButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #d32f2f;
  }
`;

function App() {
  const { winner, draw, reset } = useGrid();

  return (
    <AppContainer>
      <Title> Puissance 4 </Title> <Score />
      <Board />{" "}
      {(winner || draw) !== true && (
        <ResetButton onClick={() => reset()}> Reset </ResetButton>
      )}{" "}
    </AppContainer>
  );
}

export default App;

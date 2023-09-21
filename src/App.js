import Board from "./Component/Board/Board";
import Score from "./Component/Score/Score";
import { useGrid } from "./Context/useGrid";

function App() {
  const { winner, reset } = useGrid();

  return (
    <div className="App">
      <h1> Puissance 4 </h1> <Score /> <Board />{" "}
      {winner !== null && <button onClick={() => reset()}> Reset </button>}{" "}
    </div>
  );
}

export default App;

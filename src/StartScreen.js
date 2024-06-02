export default function StartScreen({ questions, dispatch }) {
  function onStartGame() {
    dispatch({ type: "active" });
  }

  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{questions.length} questions to test your React knowladge</h3>
      <button className="btn btn-ui" onClick={onStartGame}>
        Let's start
      </button>
    </div>
  );
}

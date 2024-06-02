export default function ProgressBar({
  questions,
  dispatch,
  currQuestion,
  totalPoints,
}) {
  const qLength = questions.length;

  return (
    <div>
      <progress id="qProgBar" max={qLength} value={currQuestion + 1}></progress>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
          fontSize: "2rem",
        }}
      >
        <CurrentQuestion qLength={qLength} currQuestion={currQuestion} />
        <TotalPoints totalPoints={totalPoints} />
      </div>
    </div>
  );
}

function CurrentQuestion({ qLength, currQuestion }) {
  // we will have the curr question for the 1
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <p>Question</p>
      <p>
        <strong>{currQuestion + 1}</strong>/{qLength}
      </p>
    </div>
  );
}

function TotalPoints({ totalPoints }) {
  // we will have curr total pointts for the 0
  const maxPoints = 280;
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <p> Total Points</p>
      <p>
        <strong>{totalPoints}</strong>/{maxPoints}
      </p>
    </div>
  );
}

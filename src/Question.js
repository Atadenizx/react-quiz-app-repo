import ProgressBar from "./ProgressBar";
import QuestionsContainer from "./QuestionsContainer";
import Timer from "./Timer";
import Button from "./Button";
import { useState } from "react";

export default function Question({ questions, dispatch }) {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answeredCorrect, hasAnsweredCorr] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const questionsLength = questions.length;

  function onChangeQuestion() {
    if (currQuestion + 1 === questionsLength) return setCurrQuestion(0);
    setCurrQuestion((curr) => curr + 1);
    if (!hasAnswered) setHasAnswered(false);
    setHasAnswered(null);
  }

  function onCalcTotalPoints(points) {
    answeredCorrect ? setHasAnswered(true) : setHasAnswered(false);

    setTotalPoints((curr) => curr + points);

    setHasAnswered(true);
  }

  return (
    <div>
      <ProgressBar
        questions={questions}
        dispatch={dispatch}
        currQuestion={currQuestion}
        totalPoints={totalPoints}
      />
      {!isFinished ? (
        <QuestionsContainer
          questions={questions}
          dispatch={dispatch}
          currQuestion={currQuestion}
          setCurrQuestion={setCurrQuestion}
          onCalcTotalPoints={onCalcTotalPoints}
          hasAnswered={hasAnswered}
          answeredCorrect={answeredCorrect}
          setHasAnswered={setHasAnswered}
        />
      ) : (
        <p>you have finished with total of {totalPoints} points</p>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "2rem",
        }}
      >
        <Timer setIsFinished={setIsFinished} />

        {!(currQuestion + 1 === questionsLength) ? (
          <Button
            setCurrQuestion={setCurrQuestion}
            questionsLength={questionsLength}
          >
            <button className="btn" onClick={onChangeQuestion}>
              Next
            </button>
          </Button>
        ) : (
          ""
        )}
        {currQuestion + 1 === questionsLength ? (
          <Button
            setCurrQuestion={setCurrQuestion}
            questionsLength={questionsLength}
          >
            <button
              className="btn"
              onClick={() => {
                setIsFinished(true);
              }}
            >
              Finish
            </button>
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

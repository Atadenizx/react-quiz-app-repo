import { useState } from "react";

export default function QuestionsContainer({
  questions,
  dispatch,
  currQuestion,
  setCurrQuestion,
  onCalcTotalPoints,
  hasAnswered,
  answeredCorrect,
  setHasAnswered,
}) {
  const isCorrectQuestion = questions[currQuestion].correctOption;
  const questionPoints = questions[currQuestion].points;
  const currOptions = questions[currQuestion].options;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
    >
      <h3>{questions[currQuestion].question}</h3>

      {hasAnswered
        ? currOptions.map((option, i) => (
            <OptionAfterAnswer
              key={i}
              option={option}
              optionKey={i}
              onCalcTotalPoints={onCalcTotalPoints}
              isCorrectQuestion={isCorrectQuestion}
              questionPoints={questionPoints}
              hasAnswered={hasAnswered}
              answeredCorrect={answeredCorrect}
              setHasAnswered={setHasAnswered}
            />
          ))
        : currOptions.map((option, i) => (
            <Option
              key={i}
              option={option}
              optionKey={i}
              onCalcTotalPoints={onCalcTotalPoints}
              isCorrectQuestion={isCorrectQuestion}
              questionPoints={questionPoints}
              hasAnswered={hasAnswered}
              answeredCorrect={answeredCorrect}
              setHasAnswered={setHasAnswered}
            />
          ))}
    </div>
  );
}

function Option({
  option,
  onCalcTotalPoints,
  optionKey,
  isCorrectQuestion,
  questionPoints,
  hasAnswered,
  answeredCorrect,
  setHasAnswered,
}) {
  return (
    <div
      className="btn-option"
      onClick={() => {
        if (hasAnswered) return;
        setHasAnswered(true);

        if (optionKey === isCorrectQuestion) onCalcTotalPoints(questionPoints);
      }}
    >
      <button className="btn-option">{option}</button>
    </div>
  );
}

function OptionAfterAnswer({
  option,
  onCalcTotalPoints,
  optionKey,
  isCorrectQuestion,
  questionPoints,
  hasAnswered,
  answeredCorrect,
  setHasAnswered,
}) {
  return (
    <div>
      <button
        className={
          optionKey === isCorrectQuestion
            ? "btn-option-correct"
            : "btn-option-wrong"
        }
      >
        {option}
      </button>
    </div>
  );
}

import { useState, useEffect, useRef, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./startScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  // "loading", "error", "ready", "active", "finished"
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "failed" };
    case "active":
      return { ...state, status: "active" };
    default:
      throw new Error("action is unknown");
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/questions");

      const data = await res.json();
      dispatch({ type: "dataReceived", payload: data });

      if (!res.ok)
        dispatch({
          type: "dataFailed",
        });
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" ? <Loader /> : ""}
        {status === "error" ? <Error /> : ""}
        {status === "ready" ? (
          <StartScreen questions={questions} dispatch={dispatch} />
        ) : (
          ""
        )}
        {status === "active" ? <Question /> : ""}
      </Main>
    </div>
  );
}

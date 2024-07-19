import { useEffect, useReducer } from 'react'
import './App.css'
import Header from './heaader'
import Main1 from './Main1'

import Loader from '../Special Component/Loader'
import ErrorComponent from '../Special Component/Error'
import StartScreen from './startScreen'
import QuestionsComponent from './QuestionsComponent'
import NextQuestion from './nextQuestion'
import ProgressComponent from './Progress'
import FinishQuize from './FinishQuize'

const initialstate = {
  Question: [],
  //loading, error, ready, active, fnished;
  status: "Loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {

    case "dataReceived":
      return { ...state, Question: action.payload, status: "Ready" };

    case "dataFaild":
      return { ...state, status: "Error" };

    case "start":
      return { ...state, status: "Active" };

    case "newAnswer":
      console.log("State =", state);
      console.log("State- =", state.Question.at(state.index));
      const markedQuestion = state.Question.at(state.index);
      return {
        ...state, answer: action.payload,
        points: action.payload === markedQuestion.correctAnswer
          ? state.points + markedQuestion.points : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finished":
      return {
        ...state, status: 'finished',
        highScore: state.points > state.highScore ? state.points : state.highScore
      }

    case "restart":
      return{
        ...initialstate, Question:state.Question, status:"Ready",
      }
     //Both return statement are similar:
      // return{
      //   ...state,
      //   points:0,
      //   highScore:0,
      //   index:0,
      //   answer:null,
      //   status:"Ready"
      // }

    default:
      throw new Error("Action UnKnown:");
  };

}

function App() {

  const [{ Question, status, index, answer, points, highScore }, dispatch] = useReducer(reducer, initialstate);

  const maxPoint = Question.reduce((prev, cur) =>
    prev + cur.points, 0
  )

  useEffect(() => {
    fetch('http://localhost:9000/Question')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return res.json();
      })

      .then((data) => {
        dispatch({ type: "dataReceived", payload: data });
        // console.log(data);
      })

      .catch((err) => {
        dispatch({ type: "dataFaild" });
      });

  }, []);

  return (
    <>
      <Header />

      <Main1 >
        {status === "Loading" && <Loader />}
        {status === "Error" && <ErrorComponent />}
        {status === "Ready" && <StartScreen question={Question} dispatch={dispatch} />}
        {status === "Active" && (
          <>
            <ProgressComponent index={index} numQuestion={Question} maxPoint={maxPoint} points={points} />

            <QuestionsComponent question={Question[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <NextQuestion dispatch={dispatch} answer={answer} index={index} question={Question} />
          </>
        )}
        {status === "finished" && <FinishQuize points={points} maxPoint={maxPoint}
         highScore={highScore}dispatch={dispatch}/>}
      </Main1>

    </>
  )
}

export default App
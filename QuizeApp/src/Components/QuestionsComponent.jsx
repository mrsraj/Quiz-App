

import Options from "./options";

function QuestionsComponent({ question, dispatch, answer }) {
    console.log("Single Question object - ",question);
    return (
        <>
            <div>
                <h3>Question : {question.question}</h3>
                <Options question={question} dispatch={dispatch} answer={answer} />
            </div>
        </>
    )
}

export default QuestionsComponent;


function NextQuestion({ dispatch, answer, index, question }) {
    if (answer === null) {
        return null;
    }

    if (index < question.length-1) {
        return (
            <button className="next-question" 
            onClick={() => { dispatch({ type: "nextQuestion" }) }}>Next</button>
        )
    }

    if (index === question.length-1) {
        return (
            <button className="next-question" 
            onClick={() => { dispatch({ type: "finished" }) }}>finished</button>
        )
    }
    
}

export default NextQuestion;
import '../CSS/Options.css'

function Options({ question, dispatch, answer }) {

    const hasAnswer = answer !== null;

    return (
        <div>
            <div className="options">
                {question.options.map((option, index) => (
                    <button className={`${index === answer ? answer : ""} 
                        ${hasAnswer
                            ? index === question.correctAnswer
                                ? "correct" : "wrong" : ""}`
                    }

                        key={option}
                        onClick={() => { dispatch({ type: "newAnswer", payload: index }) }}>
                        {option}
                    </button>
                ))
                }
            </div>
        </div>
    )
}

export default Options;
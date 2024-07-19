function ProgressComponent({ index, numQuestion,points,maxPoint }) {
    return (
        <header className="progress">
            <p>
                Question <strong>{index + 1}/{numQuestion.length}</strong>
            </p>
            <p>Your Score : <strong>{points}</strong>/{maxPoint}</p>
        </header>
    )
}

export default ProgressComponent;
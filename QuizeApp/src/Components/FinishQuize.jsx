function FinishQuize({ points, maxPoint,highScore, dispatch }) {
    const percentage = (points / maxPoint) * 100;
    const per = Math.ceil(percentage)
    let emoji;
    if (per === 100) emoji = "🏆"
    if (per >= 80 && per < 100) emoji = "🎉"
    if (per >= 50 && per < 80) emoji = "🤔"
    if (per < 50) emoji = "😞"
    return (
        <>
            <p>
                <span>{emoji}</span>Your Score is <strong>{points}</strong> out of {maxPoint}( percentage: {per}%)
            </p>

            <p>highScore = {highScore}</p>

            <button onClick={()=>dispatch({type:"restart"})}>Re-Start Quize</button>

        </>
    )
}

export default FinishQuize;
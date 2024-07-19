function StartScreen({question, dispatch}){
    console.log("Number of Question = ",question.length);

    const stl = {
        height: "100vh",
        width: "100%",
        textAlign:"center"
    }
    return(
        <div className="start" style={stl}>
            
          <h2>Welcome to the react Quize!</h2>
          <p>{question.length} question to test your react mastery.</p>
          <button onClick={()=>dispatch({type:"start"})}>Let's start</button>
        </div>
    )
}

export default StartScreen;
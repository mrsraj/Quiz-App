

function Loader() {
    const stl = {
        height: "100vh",
        width: "100%",
        display:"flex",
        justifyContent:"center",
        textContent:"center"
    };
    return (
        <div className="loader" style={stl}>Loading...</div>
    );
}

export default Loader;
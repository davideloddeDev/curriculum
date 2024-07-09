export function Home() {

    const mainStyle = {
        height: "80vh",
        width: "100vw",
        backgroundColor: "#fff",
        display: "flex",
        flexOrientation: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    return(
        <div style={mainStyle}>
            <h1>Home</h1>
        </div>
    )
}
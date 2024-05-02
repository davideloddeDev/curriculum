export function Logo() {
    const styleCollegamento = {
        
        padding: "10px",
        color: "#fff",
        display: "flex",
        flexOrientation: "row",
        justifyContent: "center",
        alignItems: "center"
    }

    const styleH2 = {
        margin: "0px",
        padding: "0px",
        fontSize: "30px",
        marginRight: "5px",
        marginLeft: "5px"
    }
    const styleP = {
        margin: "0px",
        padding: "0px",
        fontWeight: "bold",
        marginLeft: "5px",
        marginRight: "5px"
    }
    return(
        <a style={styleCollegamento} href="#">
            <h2 style={styleH2}>&lt;</h2>
            <p style={styleP}>Davide Lodde</p>
            <h2 style={styleH2}>/&gt;</h2>
            
             
        </a>
    )
}

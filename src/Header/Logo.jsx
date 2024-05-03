import './logo.css'

export function Logo() {
    

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
        <a className='styleCollegamento'>
            <h2 className='styleH2'>&lt;</h2>
            <p className='styleP'>Davide Lodde</p>
            <h2 className='styleH2'>/&gt;</h2>
        </a>
    )
}

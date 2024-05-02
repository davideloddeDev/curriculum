import { Logo } from "./Logo"
import './css/headerHome.css'

export function HeaderHome() {
    const headerStyle = {
        height: "70px",
        width: "100vw",
        backgroundColor: "#212529",
        display: "flex",
        flexOrientation: "row"

    }
    return(
        <div style={headerStyle}>
            <Logo />
        </div>
        
    )
}
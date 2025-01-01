import { Logo } from "./Logo.jsx"
import {Menu} from "./Menu.jsx";

export function HeaderPages() {
    const headerStyle = {
        height: "70px",
        width: "100vw",
        backgroundColor: "#212529",
        display: "flex",
        flexOrientation: "row",
        position: "fixed",
        top: "0",
        zIndex: "100"

    }
    return(
        <header style={headerStyle}>
            <Logo />
            <Menu />
        </header>
        
    )
}
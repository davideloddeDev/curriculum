import { Logo } from "./Logo.jsx"
import {Menu} from "./Menu.jsx";

export function HeaderPages() {
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
            <Menu />
        </div>
        
    )
}
import { HeaderHome } from './Home/HeaderHome.jsx'
import { MainHome } from './Home/MainHome.jsx'
import { FooterHome } from './Home/FooterHome.jsx'
export function Home() {
    const style = {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    }

    return(
        <div style={style}>
            <HeaderHome />
            <MainHome />
            <FooterHome />
        </div>
    )
}
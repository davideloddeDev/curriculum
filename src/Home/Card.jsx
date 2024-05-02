export function Card( {imageSrc, imageAlt, title, description1, description2, href} ) {
    const cardStyle = {
        height: "30vh",
        width: "30vw",
        backgroundColor: "#0000ff",
        margin: "10px",
    }

    const textStyle = {
        color: "#fff",
    }

    const buttonStyle = {
        backgroundColor: "#fff",
        color: "#000"
    }
    return(
        <div style={cardStyle}>
            <img src={imageSrc} alt={imageAlt} />
            <h2 style={textStyle}>{title}</h2>
            <p style={textStyle}>{description1}<br/>{description2}</p>
            <button style={buttonStyle} href={href}>Vai</button>
        </div>
    )
}
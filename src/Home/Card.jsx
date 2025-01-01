import './css/card.css'

export function CardHome({imageSrc, titleText, descriptionText, link}) {
    return (
        <div className="card">
            <img className="card-image" src={imageSrc} alt={titleText} />
            <div className="card-body">
                <h2 className="card-title">{titleText}</h2>
                <p className="card-text">{descriptionText}</p>
                <button className="card-button" onClick={() => window.location.href = link}>
                    Scopri di più
                </button>
            </div>
        </div>
    )
}
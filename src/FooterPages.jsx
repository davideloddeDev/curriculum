import './css/footer.css'

export function FooterPages() {

    return(
        <footer className="footer">
            <div className="mainFooter">
                <div className="footerSx">
                    <a href="#">Contatti</a>
                    <a href="#">I Miei Lavori</a>
                    <a href="#">I Miei Corsi</a>
                    <a href="#">Dati Anagrafici</a>
                    <a href="#">I Miei Studi</a>
                </div>
                <div className="footerDx">
                    <a href="#"><strong>Davide Lodde</strong></a>
                    <a href="#">Via Farfa 16</a>
                    <a href="#">09134 Cagliari, Italy</a>
                    <a href="tel:+393890459408">Tel: +39 389 - 045 - 9408</a>
                    <a href="mailto:dalo.apps@gmail.com">Mail: dalo.apps@gmail.com</a>
                </div>

            </div>
            <div className="extremeFooter">
                <p>&copy; {new Date().getFullYear()} Davide Lodde. Tutti i diritti riservati.</p>
            </div>

        </footer>
    )
}
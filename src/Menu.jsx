import './css/menu.css';
import { useState, useEffect } from 'react';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funzione per aggiornare lo stato del menu in base alla larghezza dello schermo
  const updateMenuState = () => {
    setIsMenuOpen(window.innerWidth >= 1000);
  };

  // Aggiorna lo stato del menu al caricamento della pagina e al resize
  useEffect(() => {
    updateMenuState();
    window.addEventListener('resize', updateMenuState);
    return () => window.removeEventListener('resize', updateMenuState);
  }, []);

  return (
    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
      {/* Mostra il pulsante hamburger solo se la larghezza dello schermo è inferiore a 1000px */}
      {window.innerWidth < 1000 && (
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Icona hamburger */}
          ☰
        </button>
      )}

      {/* Mostra il menu se isMenuOpen è true o se la larghezza dello schermo è maggiore o uguale a 1000px */}
      {(isMenuOpen || window.innerWidth >= 1000) && (
        <nav className="menu-links">
          <a href="/anagrafica">Dati Anagrafici</a>
          <a href="/studi">I Miei Studi</a>
          <a href="/lavori">I Miei Lavori</a>
          <a href="/contatti">Contatti</a>
        </nav>
      )}
    </div>
  );
}
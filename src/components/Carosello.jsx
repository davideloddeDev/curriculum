import { useState } from 'react';
import '../css/carosello.css';

export function Carosello({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        setActiveIndex((current) => 
            current === children.length - 1 ? 0 : current + 1
        );
    };

    const prev = () => {
        setActiveIndex((current) => 
            current === 0 ? children.length - 1 : current - 1
        );
    };

    return (
        <div className="carosello">
            <button className="carosello-button prev" onClick={prev}>
                ‹
            </button>
            
            <div className="carosello-content">
                {children[activeIndex]}
            </div>
            
            <button className="carosello-button next" onClick={next}>
                ›
            </button>
        </div>
    );
}

import React from 'react';

// import './style.css';

function Card({ card }) {
    return (
        <div className="col-md-6 mt-4">
            <div style={{ backgroundImage: `url(./img/bg/${card.img})` }} className="img">
                <div className="overlay-img"></div>
                <div className="animation-description">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <span className="icons">
                        <button className="icon fas fa-eye border-0"
                            onClick={() => {
                                window.open(card.link, '_blank');
                            }}
                        ></button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;

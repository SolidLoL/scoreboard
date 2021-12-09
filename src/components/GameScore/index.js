import React from 'react';
import './GameScore.scss'
export const GameScore = () => (
    <div className="container-score">
        <h2 className="title">Titulo</h2>
        <div className="clock">14:34</div>
        <div className="vs">
            <div className="local">
                <div className="score">3</div>
                <div className="name">nombre</div>
            </div>
            <div className="visit">
                <div className="score">4</div>
                <div className="name">nombre</div>
            </div>
        </div>
    </div>
)

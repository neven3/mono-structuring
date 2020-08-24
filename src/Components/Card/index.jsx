import React from 'react';
import './styles.css';

function Card(props) {
    return (
        <div className="card-container">
            <h3 className="car-make">{props.car.make}</h3>
            <p>{props.car.model}</p>
        </div>
    );
}

export default Card;
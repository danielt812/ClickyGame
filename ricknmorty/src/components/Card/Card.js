import React from "react";
import './Card.css';

const Card = (props) => {
    // console.log(props);
    return (
    <div
        className="card"
        value={props.id}
        onClick={() => props.handleClick(props.id)}
    >
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)
}

export default Card;
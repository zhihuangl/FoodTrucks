import React from "react";

const Card = (props) => {
    const redirectToPage = () => {
        window.location.href = props.page;
    };

    return (
        <div className="Card">
            <div className="img">
                <img src={props.imageSrc} alt={props.name} />
            </div>
            <h3>{props.name}</h3>
            <h4>{props.type}</h4>
            <button onClick={redirectToPage}>View Menu</button>
        </div>
    )
}
export default Card;
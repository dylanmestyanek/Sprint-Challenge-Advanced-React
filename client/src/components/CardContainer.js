import React from "react";

import Card from "./Card"

const CardContainer = ({ googleData }) => {
    return (
        <div>
            <h1> Women's World Cup Player's </h1>
            {
                googleData.map(player => <Card player={player} />)
            }
        </div>
    );
}

export default CardContainer
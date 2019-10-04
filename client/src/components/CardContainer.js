import React from "react";

import Card from "./Card"

const CardContainer = ({ googleData }) => {
    return (
        <div>
            <h1 data-testid="dataTitle">Women's World Cup Players</h1>
            {
                googleData.map(player => <Card player={player} />)
            }
        </div>
    );
}

export default CardContainer
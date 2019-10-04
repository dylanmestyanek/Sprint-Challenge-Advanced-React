import React from "react"

const Card = ({ player }) => {
    return(
        <div>
            <h3>{player.name}</h3>
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
        </div>
    );
}

export default Card
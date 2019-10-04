import React from "react"

import useLocalStorage from "../hooks/useLocalStorage"

const Card = ({ player }) => {
    const [storedPlayers, setStoredPlayers] = useLocalStorage('players', '')

    return(
        <div onClick = {() => setStoredPlayers([...storedPlayers, player.name])}>
            <h3>{player.name}</h3>
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
        </div>
    );
}

export default Card
import { useState, useRef } from "react";

export default function Player() {
  const playerDetails = useRef();

  const [playerName, setPlayerName] = useState();

  const handleClick = () => {
    setPlayerName(playerDetails.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerDetails} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

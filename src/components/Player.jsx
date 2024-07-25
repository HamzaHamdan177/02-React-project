import App from "../App";
import { useState } from "react";
export default function Player({ initialName, symbol, active, setName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    isEditing ? setName(symbol, playerName) : null;
    setIsEditing((editing) => !editing); //tihs is the best practive to make sure your code is working perfectly fine
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editing;
  if (isEditing)
    editing = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  else editing = <span className="player-name">{playerName}</span>;

  return (
    <li className={active == symbol ? "active" : null}>
      <span className="player">
        {editing}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
/*
const [feedback,setFeedback]=React.useState("its nice");
    const [name,setName]=React.useState("hamza");
    function handleChangeF(feedback){
        {setFeedback(feedback.target.value)}
        <Review feedback={feedback.target.value} />
     
    }*/

import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(13);

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () =>{
       
        setTeam(team - 1);
    }
   const teamStyle = {
    border: '2px solid purple',
    margin: '20px' ,
    padding: '10px',
    borderRadius: '10px'
   }

    return (
        <div style={teamStyle}>
            <h3>players: {team}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
        
    )
}
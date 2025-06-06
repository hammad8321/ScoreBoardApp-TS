import React, { useState } from 'react'


interface AddPlayerFormProps {
  onAdd: (name: string) => void;
}

const AddPlayerForm: React.FC<AddPlayerFormProps> = ({ onAdd } : AddPlayerFormProps) => {
    const [name, setName] = useState("");

    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(name);
    setName("");
  };
  return (
   <div className="add-player-form">
      <form 
           onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Player Name"
        />
        <input type="submit" value="Add Player" />
      </form>
    </div>
  )
}

export default AddPlayerForm
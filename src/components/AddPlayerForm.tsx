import React, { useState } from "react";

interface AddPlayerFormProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  onAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AddPlayerForm: React.FC<AddPlayerFormProps> = ({
  onAdd,
  setName,
  name,
}: AddPlayerFormProps) => {
  return (
    <div className="add-player-form">
      <form
        onSubmit={onAdd
        }
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
  );
};

export default AddPlayerForm;


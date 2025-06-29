import React, { useState } from "react";

export default function TrainerNameScreen({ setScreen, setTrainerName }) {
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputName.trim();
    if (name) {
      setTrainerName(name);
      setScreen("mood");
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div className="trainer-screen">
      <h2 className="trainer-heading">What's your name, Trainer?</h2>
      <form id="trainer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="trainerName"
          placeholder="Enter your name here..."
          autoFocus
          required
          autoComplete="off"
          className="trainer-input"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input type="submit" className="next-button" value="Next" />
      </form>
    </div>
  );
}

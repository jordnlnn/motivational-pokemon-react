import React, { useState } from "react";

export default function SelectBuddy({ setScreen, setPokemonName }) {
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputName.trim();
    if (name) {
      setPokemonName(name);
      setScreen("select");
    } else {
      alert("Please enter a Pokemon!");
    }
  };

  return (
    <div className="select-screen">
      <p className="select-text">Choose your buddy:</p>
      <form id="select-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          placeholder="Enter pokemon here..."
          autoFocus
          required
          autoComplete="on"
          className="pokemon-input"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input type="submit" className="next-button" value="Next" />
      </form>
    </div>
  );
}

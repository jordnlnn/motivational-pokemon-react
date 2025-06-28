import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SelectBuddy({ setScreen, setPokemonName }) {
  const [inputName, setInputName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000").then((res) => {
      setPokemonList(res.data.results.map((p) => p.name.toLowerCase()));
    });
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputName(value);

    if (value.length > 0) {
      const filtered = pokemonList
        .filter((name) => name.startsWith(value))
        .slice(0, 5); // Limit suggestions to 5
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setInputName(name);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemonList.includes(inputName)) {
      setPokemonName(inputName);
      setScreen("chat");
    } else {
      alert("Pokémon not found. Please try again.");
    }
  };

  return (
    <div className="select-screen">
      <p className="select-text">Choose your buddy:</p>
      <form onSubmit={handleSubmit} id="select-form">
        <div className="autocomplete">
          <input
            type="text"
            value={inputName}
            onChange={handleInputChange}
            placeholder="Enter Pokémon name"
            autoFocus
            className="pokemon-input"
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((name) => (
                <li key={name} onClick={() => handleSuggestionClick(name)}>
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <input type="submit" value="Next" className="next-button" />
        <button
          type="button"
          className="fate-btn"
          onClick={() => {
            if (pokemonList.length === 0) {
              alert("Pokémon list not loaded yet. Please try again.");
              return;
            }
            const randomIndex = Math.floor(Math.random() * pokemonList.length);
            const randomPokemon = pokemonList[randomIndex];
            setPokemonName(randomPokemon);
            setScreen("chat");
          }}
        >
          Let Fate Decide
        </button>
      </form>
    </div>
  );
}

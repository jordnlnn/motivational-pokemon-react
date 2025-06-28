import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChatScreen({ pokemonName, trainerName }) {
  const [userInput, setUserInput] = useState("");
  const [quote, setQuote] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");

  useEffect(() => {
    // Get Pokémon sprite
    if (pokemonName) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then((res) => {
          setPokemonImage(res.data.sprites.front_default);
        })
        .catch(() => {
          setPokemonImage("");
        });

      // Motivational quote examples
      const quotes = {
        bulbasaur:
          "Bloom where you're planted! Even the smallest seed can grow into a great vine.",
        pikachu: "You light up the room! Stay charged and keep going!",
        charmander: "Every ember can become a blaze. Keep your fire alive!",
      };

      setQuote(
        quotes[pokemonName.toLowerCase()] || "You're doing amazing, Trainer!"
      );
    }
  }, [pokemonName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${trainerName || "Trainer"} said:`, userInput);
    setUserInput("");
    // You could do more here later: send to a backend, show response, etc.
  };

  return (
    <div className="chat-screen">
      <form onSubmit={handleSubmit} className="chat-box">
        <label htmlFor="response" className="chat-label">
          Type your response here:
        </label>
        <input
          type="text"
          id="response"
          className="chat-input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input type="submit" value="NEXT" className="next-button" />
      </form>

      <div className="quote-bubble">
        <p>{quote}</p>
      </div>

      {pokemonImage && (
        <img
          src={pokemonImage}
          alt={`${pokemonName}`}
          className="pokemon-sprite"
        />
      )}
    </div>
  );
}

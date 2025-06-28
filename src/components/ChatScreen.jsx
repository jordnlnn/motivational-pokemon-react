import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChatScreen({ pokemonName, trainerName, mood }) {
  const [userInput, setUserInput] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [chatCount, setChatCount] = useState(0);
  const [response, setResponse] = useState("");
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (pokemonName) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then((res) => {
          setPokemonImage(res.data.sprites.front_default);
        });

      // First motivational message
      const initialMsg = `${trainerName}, I heard you're feeling ${mood}. I'm here for you! What's on your mind?`;
      setResponse(initialMsg);
    }
  }, [pokemonName, trainerName, mood]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ended) return;

    if (chatCount === 3) {
      setResponse(
        `You're doing great, ${trainerName}. Just one more thing on your mind?`
      );
    } else if (chatCount === 4) {
      setResponse(
        `Thanks for chatting with me today, ${trainerName}! Remember, you're stronger than you think. 🌟`
      );
      setEnded(true);
    } else {
      setResponse(`Thanks for sharing, ${trainerName}. Tell me more.`);
    }

    setChatCount((prev) => prev + 1);
    setUserInput("");
  };

  return (
    <>
      <div className="chat-screen">
        <p className="chat-text">Type your response here:</p>
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            id="response"
            className="chat-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={ended}
          />
          <input
            type="submit"
            value={ended ? "Done" : "SEND"}
            className="send-btn"
            disabled={ended}
          />
        </form>
      </div>

      <div className="quote-bubble">
        <p>{response}</p>
      </div>

      {pokemonImage && (
        <img src={pokemonImage} alt={pokemonName} className="pokemon-sprite" />
      )}
    </>
  );
}

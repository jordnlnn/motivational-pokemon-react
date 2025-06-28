import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function ChatScreen({ pokemonName, trainerName, mood }) {
  const [userInput, setUserInput] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pokemonName) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then((res) => {
          setPokemonImage(res.data.sprites.front_default);
        });

      const welcomeMsg = `${trainerName}, I heard you're feeling ${mood}. I'm here for you! What's on your mind?`;
      setResponse(welcomeMsg);
    }
  }, [pokemonName, trainerName, mood]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `You're ${pokemonName}, a kind and encouraging Pokémon. Your trainer ${trainerName} is feeling ${mood}. Reply warmly and positively to this: "${userInput}". Keep responses 3-4 sentences long.`;
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
    } catch (e) {
      setError(e.message);
    }
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
          />
          <input type="submit" className="send-btn" />
        </form>
      </div>

      <div className="quote-bubble">
        <p>{error ? <p>{error}</p> : <p>{response}</p>}</p>
      </div>

      {pokemonImage && (
        <img src={pokemonImage} alt={pokemonName} className="pokemon-sprite" />
      )}
    </>
  );
}

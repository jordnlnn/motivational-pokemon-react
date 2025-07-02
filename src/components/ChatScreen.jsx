import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function ChatScreen({ pokemonName, trainerName, mood }) {
  const [userInput, setUserInput] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);

  // NEW: count how many times they've chatted
  const [chatCount, setChatCount] = useState(0);

  useEffect(() => {
    if (!pokemonName) return;

    // fetch sprite
    axios
      .get(
        `https://corsproxy.io/?https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      )
      .then((res) => setPokemonImage(res.data.sprites.front_default))
      .catch(() => setError("Couldn't load Pokémon image."));

    // initial welcome
    setResponse(
      `${trainerName}, I heard you're feeling ${mood}. I'm here for you! What's on your mind?`
    );
  }, [pokemonName, trainerName, mood]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    if (chatCount >= 5) return; // stop after 5

    //  TURN 5: final “good-bye” message—no API call needed
    if (chatCount === 4) {
      setResponse(
        `Thanks for chatting with me today! ` +
          `I’m proud of how brave you’ve been. Remember, ` +
          `you and I—${pokemonName}—can tackle anything, one step at a time!`
      );
      setChatCount(5);
      return;
    }

    // BUILD your custom prompt
    let persona = `
You are ${pokemonName}, a kind, loyal ${pokemonName} Pokémon.
You speak in first-person (“I”), use one signature sound or catchphrase,
and sprinkle in references to your type (e.g. fire, water) or your favorite move.
`;

    let example = `
Trainer asks: "I’m nervous about my big battle tomorrow."
${pokemonName} replies:
“I’m right here with you! I’ll light up the path with my Ember—together, we’ll blaze through anything! Pika Pika!”
`;

    // ON TURN 4: add a nudge that time’s almost up
    let wrapup =
      chatCount === 3
        ? "\nAlso, please remind the trainer they’re nearing the end of our session and ask if they have one last question."
        : "";

    const prompt = `
${persona.trim()}

Example:
${example.trim()}

Now, your trainer ${trainerName} is feeling ${mood}.
Trainer says: "${userInput.trim()}"

→ Reply as ${pokemonName}, warmly and specifically:
  • 1st person (“I”)
  • up to 3 sentences
  • include 1 catchphrase or move name
  • avoid generic platitudes
${wrapup}
`;

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
      setChatCount((c) => c + 1);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <div className="chat-screen">
        <h2 className="chat-heading">Type your response here:</h2>
        <form onSubmit={handleSubmit} id="chat-form">
          <input
            type="text"
            className="chat-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={chatCount >= 5}
          />
          <input
            type="submit"
            value={chatCount < 5 ? "Send" : "Session Over"}
            className="send-btn"
            disabled={chatCount >= 5}
          />
        </form>
      </div>

      <div className="pokemon-container" style={{ position: "relative" }}>
        <div className="quote-bubble">
          {error ? <p>{error}</p> : <p>{response}</p>}
        </div>
        {pokemonImage && (
          <img
            src={pokemonImage}
            alt={pokemonName}
            className="pokemon-sprite"
          />
        )}
      </div>
    </>
  );
}

import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import Footer from "./components/Footer";
import "./App.css";
import TrainerNameScreen from "./components/TrainerNameScreen";
import MoodScreen from "./components/MoodScreen";
import SelectBuddy from "./components/SelectBuddy";
import ChatScreen from "./components/ChatScreen";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [trainerName, setTrainerName] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [mood, setMood] = useState("");

  return (
    <div className="container">
      {screen === "welcome" && <WelcomeScreen setScreen={setScreen} />}

      {screen === "trainer" && (
        <TrainerNameScreen
          setScreen={setScreen}
          setTrainerName={setTrainerName}
        />
      )}

      {screen === "mood" && (
        <MoodScreen
          setScreen={setScreen}
          trainerName={trainerName}
          setMood={setMood}
        />
      )}

      {screen === "select" && (
        <SelectBuddy setScreen={setScreen} setPokemonName={setPokemonName} />
      )}

      {screen === "chat" && (
        <ChatScreen
          trainerName={trainerName}
          pokemonName={pokemonName}
          mood={mood}
        />
      )}

      <Footer />
    </div>
  );
}

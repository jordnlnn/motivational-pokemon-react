export default function LandingScreen({ setScreen }) {
  return (
    <div className="landing-screen">
      <h1 className="landing-heading">Pokémon Support Buddy</h1>
      <p className="landing-text">Welcome! Would you like to...</p>
      <button onClick={() => setScreen("select")}>Select Pokémon</button>
      <button onClick={() => setScreen("random")}>Randomize</button>
    </div>
  );
}

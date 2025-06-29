export default function WelcomeScreen({ setScreen }) {
  return (
    <div className="welcome-screen">
      <h1 className="welcome-heading">Welcome to Pokemon Support Buddy!</h1>
      <p className="welcome-text">
        Enter your name, share how you’re feeling, pick a Pokémon, and get a
        boost of encouragement from your buddy.
        <br />
        <br />
        Ready to meet your Pokémon friend?
      </p>
      <button className="next-button" onClick={() => setScreen("trainer")}>
        NEXT
      </button>
    </div>
  );
}

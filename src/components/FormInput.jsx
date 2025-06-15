export default function FormInput() {
  return (
    <div className="form-container">
      <form id="quote-generator-form">
        <input
          type="text"
          placeholder="Enter the name of a Pokemon"
          autofocus
          required
          autocomplete="off"
          class="pokemon-input"
          id="user-input"
        />
        <input type="submit" class="submit-button" value="submit" />
      </form>
      {/* HINT */}
      <div class="hint">i.e. "Pikachu" OR "Motivate me, Snorlax!"</div>
    </div>
  );
}

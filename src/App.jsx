export default function App() {
  return (
    <div className="container">
      <h1>Motivational Pokemon</h1>
      <main>
        {/*FORM*/}
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
          <div class="hint">i.e. "Pikachu" OR "Motivate me, Snorlax!"</div>
        </div>
        {/*POKEMON NOT FOUND*/}
        <div class="not-found-error">
          ‼️Oops! That Pokémon doesn't exist. Check your spelling and try
          again‼️
        </div>
        {/*LOADING ANIMATION*/}
        <div class="loading-animation" id="loading">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
        <div class="pokemon-and-quote-container">
          {/*QUOTE CONTAINER*/}
          <div class="quote-container" id="quote"></div>
          {/*POKEMON CONTAINER*/}
          <div class="pokemon-container">
            <img src="" class="pokemon-image" />
          </div>
        </div>
      </main>
    </div>
  );
}

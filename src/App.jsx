import FormInput from "./components/FormInput";
import QuoteBox from "./components/QuoteBox";
import PokemonCard from "./components/PokemonCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <h1>Pokemon Support Buddy</h1>
      <main>
        <FormInput />
        <div class="pokemon-and-quote-container">
          <QuoteBox />
          <PokemonCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}

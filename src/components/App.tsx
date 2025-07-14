import PokemonList from './Pokemon/Pokemon.tsx';
import { Section } from '../layouts/Section.tsx';
import Favorites from './Favorites/Favorites.tsx';

function App() {
  return (
    <>
      <h1>Bienvenido a tu Pokédex!</h1>
      <section className="favorites-section">
        <h1>Tus Favoritos</h1>
        <Favorites />
      </section>
      <section className="pokemon-section">
        <h1>Lista de Pokemon</h1>
        <PokemonList />
      </section>
    </>
  );
}

export default App;

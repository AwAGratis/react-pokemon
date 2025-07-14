import Card from '../Card/Card';
import '../Pokemon/Pokemon.css';
import { useFavorites } from '../../hooks/useFavorites';

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <div className="pokemon-list-container"><p>No tienes favoritos aún.</p></div>;
  }

  return (
    <div className="pokemon-list-container">
      <ul className="pokemon-grid">
        {favorites.map((name) => (
          <li key={name} className="pokemon-list-item">
            <Card>
              <h1 className="pokemon-title">{name}</h1>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

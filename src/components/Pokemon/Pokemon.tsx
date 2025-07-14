
import { useEffect, useState } from 'react';
import Card from '../Card/Card.tsx';
import './Pokemon.css';
import { useFavorites } from '../../hooks/useFavorites';

type Pokemon = {
  name: string;
  types: string;
};

const PokemonList = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const { favorites, toggleFavorite } = useFavorites();

    useEffect(() => {
        const fetchPokemons = async () => {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                if (!res.ok) throw new Error('Error al cargar la api');
                const data = await res.json();

                const detailedPokemons: Pokemon[] = await Promise.all(
                    data.results.map(async (pokemon: { name: string; url: string }) => {
                        const pokeRes = await fetch(pokemon.url);
                        const pokeData = await pokeRes.json();
                        return {
                            name: pokeData.name,
                            types: pokeData.types.map((t: { type: { name: string } }) => t.type.name).join(', ')
                        };
                    })
                );
                setPokemons(detailedPokemons);
        };
        fetchPokemons();
    }, []);

    return (
        <div className="pokemon-list-container">
            <ul className="pokemon-grid">
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name} className="pokemon-list-item">
                        <Card>
                            <h1 className="pokemon-title">{pokemon.name}</h1>
                            <h3 className="pokemon-types">{pokemon.types}</h3>
                            <button
                                className={`favorite-btn${favorites.includes(pokemon.name) ? ' active' : ''}`}
                                onClick={() => toggleFavorite(pokemon.name)}
                            >
                                {favorites.includes(pokemon.name) ? '★ Quitar de favoritos' : '☆ Añadir a favoritos'}
                            </button>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
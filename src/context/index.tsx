import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "@lynx-js/react";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  weight: number;
  height: number;
  frontImage: string;
  backImage: string;
}

interface PokemonContextType {
  pokemons: Pokemon[];
  loading: boolean;
  error: boolean;
}

const PokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  loading: true,
  error: false,
});

export const usePokemon = (): PokemonContextType => useContext(PokemonContext);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000"
      );
      const data = await response.json();

      const pokemonDetails: Pokemon[] = await Promise.all(
        data.results.map(async (pokemon: { url: string; name: string }) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();

          return {
            id: pokemonData.id,
            name: pokemonData.name,
            types: pokemonData.types.map(
              (type: { type: { name: string } }) => type.type.name
            ),
            weight: pokemonData.weight,
            height: pokemonData.height,
            frontImage: pokemonData.sprites.front_default,
            backImage: pokemonData.sprites.back_default,
          };
        })
      );

      setPokemons(pokemonDetails);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, loading, error }}>
      {children}
    </PokemonContext.Provider>
  );
};

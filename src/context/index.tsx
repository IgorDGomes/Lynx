import { createContext, useCallback, useEffect, useState } from "react";
import type {
  PokemonBasicData,
  PokemonDetailedData,
  PokemonImportantInfo,
  PokemonListData,
} from "../types/pokemonData.js";

const pokemonsContext = createContext(null);

function PokedexProvider() {
  const [pokemonList, setPokemonList] = useState<PokemonListData[]>([]);
  const [pokemonInfo, setPokemonInfo] = useState<PokemonImportantInfo[]>([]);

  const getPokemons = useCallback(async () => {
    const basicData = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000"
    ).then((res) => res.json());

    basicData.results.map((pokemon: PokemonBasicData) => {
      const pokemonUrl = pokemon.url;
      const pokemonUrlArray = pokemonUrl.split("/").filter(Boolean);

      return setPokemonList([
        ...pokemonList,
        {
          id: pokemonUrlArray[pokemonUrlArray.length - 1],
          name: pokemon.name,
          url: pokemon.url,
        },
      ]);
    });

    pokemonList.forEach(async (pokemonData) => {
      const detailedData: PokemonDetailedData = await fetch(
        pokemonData.url
      ).then((res) => res.json());

      //   setPokemonInfo([...pokemonInfo, {
      //     detailedData.
      // }])
    });
  }, []);

  useEffect(() => {}, []);
}

import { useEffect, useState } from "@lynx-js/react";
import { Card } from "../components/card.jsx";

export function Home() {
  const [pokemonFrontImage, setPokemonFrontImage] = useState("");
  const [pokemonBackImage, setPokemonBackImage] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonWeight, setPokemonWeight] = useState("");
  const [pokemonHeight, setPokemonHeight] = useState("");

  const getData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
    const data = await response.json();
    setPokemonName(data.name);
    setPokemonId(data.id);
    setPokemonWeight(data.weight);
    setPokemonHeight(data.height);
    setPokemonFrontImage(data.sprites.front_default);
    setPokemonBackImage(data.sprites.back_default);

    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Card
        name={pokemonName}
        frontImg={pokemonFrontImage}
        backImg={pokemonBackImage}
        height={pokemonHeight}
        weight={pokemonWeight}
        id={pokemonId}
      />
    </>
  );
}

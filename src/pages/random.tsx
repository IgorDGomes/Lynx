import { useState } from "@lynx-js/react";
import { Card } from "../components/homePage/card.jsx";

export function Random() {
  const [pokemonData, setPokemonData] = useState("");
  const [pokemonFrontImage, setPokemonFrontImage] = useState("");

  const getData = async () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );
    const data = await response.json();
    setPokemonData(data.name);
    setPokemonFrontImage(data.sprites.front_default);

    return data;
  };

  return (
    <>
      <text bindtap={getData} class="fetch-button">
        Click to fetch data
      </text>
      <text>{pokemonData}</text>
      <image src={pokemonFrontImage} style="width:100px;height:100px;" />
    </>
  );
}

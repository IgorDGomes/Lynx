import { useState } from "@lynx-js/react";
import { Card } from "../components/homePage/card.jsx";

export function Random() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonFrontImage, setPokemonFrontImage] = useState("");

  const getData = async () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );
    const data = await response.json();
    setPokemonName(data.name);
    setPokemonFrontImage(data.sprites.front_default);

    return data;
  };

  return (
    <>
      <view class="random-main" bindtap={getData}>
        <view class="background"></view>
        <view class="random-pokemon">
          <image src={pokemonFrontImage} class="pokemon" />
          <text class="name">{pokemonName}</text>
        </view>
        <text class="fetch-description">Touch to get a random pokemon</text>
      </view>
    </>
  );
}

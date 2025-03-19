import { useState } from "@lynx-js/react";

import { usePokemon } from "../context/index.jsx";

export function Random() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonFrontImage, setPokemonFrontImage] = useState("");
  const { pokemons, loading, error } = usePokemon();

  if (error) {
    return (
      <view class="random-main">
        <view class="background"></view>
        <view style="display:flex;flex-direction:column;gap:1rem;align-items:center;justify-content:center;background-color:#000000aa;border-radius:8px;padding:2rem 1rem;">
          <text style="font-size:1.2rem;color:white;font-weight:bold;">
            Error fetching pokemon data :/
          </text>
        </view>
      </view>
    );
  }

  function getPokemon() {
    let randomNumber = Math.floor(Math.random() * pokemons.length);

    if (!pokemons[randomNumber].frontImage) {
      return getPokemon();
    }

    setPokemonFrontImage(pokemons[randomNumber].frontImage);
    setPokemonName(pokemons[randomNumber].name);
  }

  return (
    <>
      {loading ? (
        <view class="random-main">
          <view class="background"></view>
          <text class="fetch-description">
            Please wait while we search for pokemons
          </text>
        </view>
      ) : (
        <view class="random-main" bindtap={getPokemon}>
          <view class="background"></view>
          <view class="random-pokemon">
            <image src={pokemonFrontImage} class="pokemon" />
            <text class="name">{pokemonName}</text>
          </view>
          <text class="fetch-description">Touch to get a random pokemon</text>
        </view>
      )}
    </>
  );
}

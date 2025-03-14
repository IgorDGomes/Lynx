import { useEffect, useState } from "@lynx-js/react";
import { Card } from "../components/homePage/card.jsx";

export function Home() {
  const [pokemonFrontImage, setPokemonFrontImage] = useState("");
  const [pokemonBackImage, setPokemonBackImage] = useState("");
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonWeight, setPokemonWeight] = useState("");
  const [pokemonHeight, setPokemonHeight] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
      const data = await response.json();
      setPokemonName(data.name);
      setPokemonId(data.id);
      setPokemonWeight(data.weight);
      setPokemonHeight(data.height);
      setPokemonFrontImage(data.sprites.front_default);
      setPokemonBackImage(data.sprites.back_default);

      return data;
    } catch (error) {
      console.error("Error fetching pokemon: ", error);
      setError(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <scroll-view
        scroll-orientation="vertical"
        scroll-bar-enable
        style={{ width: "100vw", height: "100vh", padding: "40px 0 180px" }}
      >
        <view class="home-container">
          <Card
            name={pokemonName}
            frontImg={pokemonFrontImage}
            backImg={pokemonBackImage}
            height={pokemonHeight}
            weight={pokemonWeight}
            id={pokemonId}
          />
          <Card
            name={pokemonName}
            frontImg={pokemonFrontImage}
            backImg={pokemonBackImage}
            height={pokemonHeight}
            weight={pokemonWeight}
            id={pokemonId}
          />
          <Card
            name={pokemonName}
            frontImg={pokemonFrontImage}
            backImg={pokemonBackImage}
            height={pokemonHeight}
            weight={pokemonWeight}
            id={pokemonId}
          />
          <Card
            name={pokemonName}
            frontImg={pokemonFrontImage}
            backImg={pokemonBackImage}
            height={pokemonHeight}
            weight={pokemonWeight}
            id={pokemonId}
          />
          <Card
            name={pokemonName}
            frontImg={pokemonFrontImage}
            backImg={pokemonBackImage}
            height={pokemonHeight}
            weight={pokemonWeight}
            id={pokemonId}
          />
        </view>
      </scroll-view>
    </>
  );
}

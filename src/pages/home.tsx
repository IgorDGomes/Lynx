import { usePokemon } from "../context/index.jsx";

import { Card } from "../components/homePage/card.jsx";

import loader from "../assets/Load.png";

export function Home() {
  const { pokemons, loading, error } = usePokemon();

  if (error) {
    return (
      <view style="display:flex;flex-direction:column;gap:1rem;align-items:center;padding-top:5rem;">
        <text>Error fetching pokemon data :/</text>
        <text>Please try again!</text>
      </view>
    );
  }

  return (
    <>
      <scroll-view
        scroll-orientation="vertical"
        scroll-bar-enable
        style={{ width: "100vw", height: "100vh", padding: "40px 0 180px" }}
      >
        {loading ? (
          <view style="display:flex;flex-direction:column;gap:1rem;width:100vw;height:100%;justify-content:center;align-items:center;">
            <image src={loader} class="loader" />
            <text>Please wait...</text>
          </view>
        ) : (
          <view class="home-container">
            {pokemons.map((pokemon) => {
              return (
                <Card
                  name={pokemon.name}
                  frontImg={pokemon.frontImage}
                  backImg={pokemon.backImage}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  id={pokemon.id}
                  types={pokemon.types}
                />
              );
            })}
          </view>
        )}
      </scroll-view>
    </>
  );
}

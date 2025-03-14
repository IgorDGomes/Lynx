import { useState } from "@lynx-js/react";

interface CardProps {
  id?: string;
  name: string;
  frontImg: string;
  backImg: string;
  weight?: string;
  height?: string;
  types?: string[];
}

export function Card({
  id,
  name,
  frontImg,
  backImg,
  height,
  weight,
  types,
}: CardProps) {
  const [frontImage, setFrontImage] = useState(true);

  function changeImage() {
    if (frontImage) {
      return setFrontImage(false);
    }

    return setFrontImage(true);
  }

  return (
    <view bindtap={changeImage} class="pokemon-card">
      {frontImage ? (
        <image src={frontImg} class="pokemon-card-image" />
      ) : (
        <image src={backImg} class="pokemon-card-image" />
      )}
      <text class="pokemon-id">ID: {id}</text>
      <text class="pokemon-name">Name: {name}</text>
      <text class="pokemon-weight">Height: {height}</text>
      <text class="pokemon-weight">Weight: {weight}</text>
    </view>
  );
}

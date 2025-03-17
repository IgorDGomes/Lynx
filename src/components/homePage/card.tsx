import { useEffect, useState } from "@lynx-js/react";

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
      <view class="pokemon-card-info">
        <view>
          <text class="pokemon-name">
            {/* {name[0].toUpperCase() + name.slice(1, name.length)} */}
            {name}
          </text>
          <text class="pokemon-id">#{id}</text>
        </view>
        <view class="extra-info">
          <text>Ht: {height}</text>
          <text>Wt: {weight}</text>
        </view>
      </view>
    </view>
  );
}

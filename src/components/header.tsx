import logo from "../assets/kinda-pokemon-logo.png";

export function Header() {
  return (
    <view class="header">
      <image src={logo} style="width:30px;height:30px;" />
      <text>Pokedex</text>
    </view>
  );
}

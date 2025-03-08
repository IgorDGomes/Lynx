import "./App.css";
import { useState } from "@lynx-js/react";

import { Home } from "./pages/home.jsx";

import { Header } from "./components/header.jsx";
import { Random } from "./pages/random.jsx";

import homeIcon from "./assets/House.png";
import randomIcon from "./assets/Shuffle.png";
import settingsIcon from "./assets/Wrench.png";

enum Pages {
  Home = 1,
  Random,
  Settings,
}

export function App() {
  const [pageOpened, setPageOpened] = useState<Pages>(Pages.Home);

  return (
    <scroll-view scroll-orientation="vertical">
      <Header />
      {pageOpened === Pages.Home && <Home />}
      {pageOpened === Pages.Random && <Random />}
      <view class="navbar">
        <view bindtap={() => setPageOpened(Pages.Random)} class="navbar-option">
          <image src={randomIcon} class="tab-icon" />
        </view>
        <view style="height:100%;width:1px;background-color:#ffffff66;"></view>
        <view bindtap={() => setPageOpened(Pages.Home)} class="navbar-option">
          <image src={homeIcon} class="tab-icon" />
        </view>
        <view style="height:100%;width:1px;background-color:#ffffff66;"></view>
        <view
          bindtap={() => setPageOpened(Pages.Settings)}
          class="navbar-option"
        >
          <image src={settingsIcon} class="tab-icon" />
        </view>
      </view>
    </scroll-view>
  );
}

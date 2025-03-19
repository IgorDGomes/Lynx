import "./App.css";

import { useState } from "@lynx-js/react";

import { PokemonProvider } from "./context/index.jsx";

import { Settings } from "./pages/settings.jsx";
import { Random } from "./pages/random.jsx";
import { Home } from "./pages/home.jsx";

import { Header } from "./components/header.jsx";

import settingsIcon from "./assets/Wrench.png";
import randomIcon from "./assets/Shuffle.png";
import homeIcon from "./assets/House.png";

enum Pages {
  Home = 1,
  Random,
  Settings,
}

export function App() {
  const [pageOpened, setPageOpened] = useState<Pages>(Pages.Home);

  return (
    <PokemonProvider>
      <view>
        <Header />
        {pageOpened === Pages.Home && <Home />}
        {pageOpened === Pages.Random && <Random />}
        {pageOpened === Pages.Settings && <Settings />}
        <view class="navbar">
          <view
            bindtap={() => setPageOpened(Pages.Random)}
            class="navbar-option"
          >
            {pageOpened === Pages.Random ? (
              <view class="tab-open">
                <image src={randomIcon} class="tab-icon" />
              </view>
            ) : (
              <image src={randomIcon} class="tab-icon" />
            )}
          </view>
          <view class="divider"></view>
          <view bindtap={() => setPageOpened(Pages.Home)} class="navbar-option">
            {pageOpened === Pages.Home ? (
              <view class="tab-open">
                <image src={homeIcon} class="tab-icon" />
              </view>
            ) : (
              <image src={homeIcon} class="tab-icon" />
            )}
          </view>
          <view class="divider"></view>
          <view
            bindtap={() => setPageOpened(Pages.Settings)}
            class="navbar-option"
          >
            {pageOpened === Pages.Settings ? (
              <view class="tab-open">
                <image src={settingsIcon} class="tab-icon" />
              </view>
            ) : (
              <image src={settingsIcon} class="tab-icon" />
            )}
          </view>
        </view>
      </view>
    </PokemonProvider>
  );
}

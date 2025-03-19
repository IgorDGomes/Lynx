import { useState } from "@lynx-js/react";

import arrowDown from "../assets/ArrowDown.png";
import arrowUp from "../assets/ArrowUp.png";
import darkMode from "../assets/Moon.png";
import check from "../assets/Check.png";

export function Settings() {
  const [showGithubUsername, setShowGithubUsername] = useState(false);
  const [showLinkedinUsername, setShowLinkedinUsername] = useState(false);

  function selectDarkMode() {}

  function showGithub() {
    if (!showGithubUsername) {
      return setShowGithubUsername(true);
    }

    return setShowGithubUsername(false);
  }

  function showLinkedin() {
    if (!showLinkedinUsername) {
      return setShowLinkedinUsername(true);
    }

    return setShowLinkedinUsername(false);
  }

  return (
    <view>
      <text class="title">Settings</text>
      <view class="content">
        <view class="section">
          <text>Theme</text>
          <view class="theme-item" bindtap={selectDarkMode}>
            <image src={darkMode} />
            <text>Dark</text>
            <image src={check} />
          </view>
        </view>
        <view class="section">
          <text>Creator</text>
          <view class="more-info">
            <view>
              <view class="social-tab" bindtap={showGithub}>
                <text class="social">Github</text>
                <image src={showGithubUsername ? arrowUp : arrowDown} />
              </view>
              {showGithubUsername && <text class="result">IgorDGomes</text>}
            </view>
            <view>
              <view class="social-tab" bindtap={showLinkedin}>
                <text class="social">Linkedin</text>
                <image src={showLinkedinUsername ? arrowUp : arrowDown} />
              </view>
              {showLinkedinUsername && <text class="result">igordgomes</text>}
            </view>
          </view>
        </view>
      </view>
    </view>
  );
}

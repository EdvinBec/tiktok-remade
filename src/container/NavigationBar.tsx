import React from "react";
import TikTokLogo from "../assets/img/TikTokLogo.svg";
import Image from "next/image";

type Props = {};

const NavigationBar = (props: Props) => {
  return (
    <nav>
      <button className="homeLogoButton">
        <Image src={TikTokLogo} alt="TikTok" className="fullSizeLogo" />
      </button>
    </nav>
  );
};

export default NavigationBar;

import React from "react";
import TikTokLogo from "../assets/img/TikTokLogo.svg";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";

type Props = {};

const NavigationBar = (props: Props) => {
  return (
    <nav>
      <button className="homeLogoButton">
        <Image src={TikTokLogo} alt="TikTok" className="fullSizeLogo" />
      </button>
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="actionButtons"></div>
    </nav>
  );
};

export default NavigationBar;

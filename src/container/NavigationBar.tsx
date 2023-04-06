import React, { useState } from "react";
import TikTokLogo from "../assets/img/TikTokLogo.svg";
import PlusIcon from "../assets/img/PlusIcon.svg";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";
import LoginPopup from "@/components/LoginPopup";

type Props = {};

const NavigationBar = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <nav>
      <LoginPopup showModal={showModal} handleClose={handleClose} />
      <button className="homeLogoButton">
        <Image src={TikTokLogo} alt="TikTok" className="fullSizeLogo" />
      </button>
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="actionButtons">
        <Button label="Upload" icon={PlusIcon} />
        <Button
          label="Login"
          borderRadius={4}
          fill="#fe2c55"
          color="#fff"
          outlineWidth={0}
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;

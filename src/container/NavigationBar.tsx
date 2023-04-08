/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import TikTokLogo from "../assets/img/TikTokLogo.svg";
import PlusIcon from "../assets/img/PlusIcon.svg";
import Inbox from "../assets/img/Inbox.svg";
import Messages from "../assets/img/Messages.svg";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";
import LoginPopup from "@/components/LoginPopup";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const NavigationBar = (props: Props) => {
  const auth = getAuth();

  const [showModal, setShowModal] = useState(false);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div></div>;
  }

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
        {!user ? (
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
        ) : (
          <div className="profileInfo">
            <button className="iconButton">
              <Image src={Messages} alt="messages" className="messages" />
            </button>
            <button className="iconButton">
              <Image src={Inbox} alt="inbox" className="icon" />
            </button>
            <button className="profileAvatar">
              <img src={user.photoURL} alt="profile" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

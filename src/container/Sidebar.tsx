//Components
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "@/components/Button";
import LoginPopup from "@/components/LoginPopup";

//Images
import HomeIcon from "../assets/img/Sidebar/HomeIcon.svg";
import PeopleIcon from "../assets/img/Sidebar/PeopleIcon.svg";
import LiveIcon from "../assets/img/Sidebar/LiveIcon.svg";
import ZigaProfilePicture from "../assets/img//zigaProfilePicture.jpeg";
import EdvinProfilePicture from "../assets/img/EdvinProfilePicture.jpeg";

//Functions
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const SidebarButtons = [
  {
    label: "For You",
    icon: HomeIcon,
    alt: "For You",
    path: "/",
  },
  {
    label: "Following",
    icon: PeopleIcon,
    alt: "Following",
    path: "/following",
  },
  {
    label: "LIVE",
    icon: LiveIcon,
    alt: "Live",
    path: "/live",
  },
];

//Suggested accounts that are shown in the sidebar
const SuggestedAccounts = [
  {
    username: "zigav",
    picture: ZigaProfilePicture,
  },
  {
    username: "edvin160",
    picture: EdvinProfilePicture,
  },
  {
    username: "zigav",
    picture: ZigaProfilePicture,
  },
  {
    username: "edvin160",
    picture: EdvinProfilePicture,
  },
];

const Sidebar = (props: Props) => {
  const router = useRouter();
  const auth = getAuth();

  const [showModal, setShowModal] = useState(false);
  const [user, loading] = useAuthState(auth); //State, that checks if the user is signed in

  if (loading) {
    return <div></div>;
  }

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="sidebarContainer">
      <LoginPopup showModal={showModal} handleClose={handleClose} />
      <div className="navigationButtons">
        {SidebarButtons.map((item, itemIdx) => {
          return (
            <button
              key={itemIdx}
              onClick={() => {
                router.push(item.path);
              }}
              className={`${router.asPath === item.path && "selected"}`} //If URL path is equal to the path specified in SidebarButtons item, color it pink.
            >
              <Image src={item.icon} alt={item.alt} className="navIcon" />
              <div className="isVisible"> {item.label}</div>{" "}
              {/*Button label, that gets hidden when screen reaches less than 700px*/}
            </button>
          );
        })}
      </div>
      {!user && ( //This section gets shown if user is logged in
        <div className="loginSection">
          <p>Log in to follow creators, like videos, and view comments.</p>
          <Button
            label="Log in"
            outlineColor="#fe2c55"
            color="#fe2c55"
            width="70%"
            borderRadius={4}
            onClick={() => setShowModal(true)}
          />
        </div>
      )}
      <div className="suggestedAccounts">
        <p className="hide">Suggested accounts</p>{" "}
        {/*Class hide, hides username in mobile view*/}
        {SuggestedAccounts.map((item, itemIdx) => {
          return (
            <button key={itemIdx}>
              <Image
                src={item.picture}
                alt="profile"
                className="profileImage"
              />
              <div className="hide">
                {" "}
                {/*Class hide, hides username in mobile view*/}
                <p className="username">{item.username}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

import Image from "next/image";
import React from "react";
import HomeIcon from "../assets/img/Sidebar/HomeIcon.svg";
import PeopleIcon from "../assets/img/Sidebar/PeopleIcon.svg";
import LiveIcon from "../assets/img/Sidebar/LiveIcon.svg";
import ZigaProfilePicture from "../assets/img//zigaProfilePicture.jpeg";
import EdvinProfilePicture from "../assets/img/EdvinProfilePicture.jpeg";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

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

  const [btnColor, setBtnColor] = useState("#000");

  return (
    <div className="sidebarContainer">
      <div className="navigationButtons">
        {SidebarButtons.map((item, itemIdx) => {
          return (
            <button
              key={itemIdx}
              onClick={() => {
                router.push(item.path);
              }}
              className={`${router.asPath === item.path && "selected"}`}
            >
              <Image src={item.icon} alt={item.alt} className="navIcon" />
              <div className="isVisible"> {item.label}</div>
            </button>
          );
        })}
      </div>
      <div className="loginSection">
        <p>Log in to follow creators, like videos, and view comments.</p>
        <Button
          label="Log in"
          outlineColor="#fe2c55"
          color="#fe2c55"
          width="70%"
          borderRadius={4}
        />
      </div>
      <div className="suggestedAccounts">
        <p className="hide">Suggested accounts</p>
        {SuggestedAccounts.map((item, itemIdx) => {
          return (
            <button key={itemIdx}>
              <Image
                src={item.picture}
                alt="profile"
                className="profileImage"
              />
              <div className="hide">
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

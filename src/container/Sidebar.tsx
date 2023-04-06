import Image from "next/image";
import React from "react";
import HomeIcon from "../assets/img/Sidebar/HomeIcon.svg";
import PeopleIcon from "../assets/img/Sidebar/PeopleIcon.svg";
import LiveIcon from "../assets/img/Sidebar/LiveIcon.svg";

type Props = {};

const SidebarButtons = [
  {
    label: "For You",
    icon: HomeIcon,
    alt: "For You",
  },
  {
    label: "Following",
    icon: PeopleIcon,
    alt: "Following",
  },
  {
    label: "LIVE",
    icon: LiveIcon,
    alt: "Live",
  },
];

const Sidebar = (props: Props) => {
  return (
    <div className="sidebarContainer">
      <div className="navigationButtons">
        {SidebarButtons.map((item, itemIdx) => {
          return (
            <button key={itemIdx}>
              <Image src={item.icon} alt={item.alt} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

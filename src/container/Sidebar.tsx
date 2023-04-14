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

//Functions
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebaseApp";

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

const Sidebar = (props: Props) => {
  const router = useRouter();
  const auth = getAuth();

  const [showModal, setShowModal] = useState(false);
  const [user, loading] = useAuthState(auth); //State, that checks if the user is signed in

  const [values, error] = useCollectionData<any>(collection(db, "users"));

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
        {user && <p className="hide">Suggested accounts</p>}{" "}
        {/*Class hide, hides username in mobile view*/}
        {values &&
          user &&
          values
            .filter((item) => item.uid !== user.uid)
            .filter((item, itemIdx) => itemIdx < 5)
            .map((item, itemIdx) => {
              return (
                <button key={itemIdx}>
                  <Image
                    src={item.photoURL}
                    alt="profile"
                    className="profileImage"
                    width={32}
                    height={32}
                  />
                  <div className="hide">
                    {" "}
                    {/*Class hide, hides username in mobile view*/}
                    <p className="username">{item.displayName}</p>
                  </div>
                </button>
              );
            })}
      </div>
    </div>
  );
};

export default Sidebar;

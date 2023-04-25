import React from "react";
import Button from "./Button";
import Image from "next/image";

type Props = {
  item: any;
};

const ProfileInformationPopup = ({ item }: Props) => {
  return (
    <div className="profileInformationWindow">
      <div className="topRow">
        <Image
          src={item.photoURL}
          alt="profile"
          className="profileImage"
          width={32}
          height={32}
        />
        <Button
          fill="#fe2c55"
          label="Follow"
          color="#fff"
          width="3rem"
          borderRadius={4}
        />
      </div>
      <div className="title">
        <div className="headline">
          <h4>{item.displayName}</h4>
        </div>
        <div className="description">
          <p>{item.displayName}</p>
        </div>
      </div>
      <div className="statistics">
        <label>
          <span>{item.followersNum}</span>
          Followers
        </label>
        <label>
          <span>{item.likes}</span>
          Likes
        </label>
      </div>
    </div>
  );
};

export default ProfileInformationPopup;

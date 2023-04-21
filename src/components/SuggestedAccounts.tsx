import Image from "next/image";
import React, { useState } from "react";
import ProfileInformationPopup from "./ProfileInformationPopup";

type Props = {
  user: any;
  values: Array<any> | undefined;
};

const SuggestedAccounts = ({ user, values }: Props) => {
  const [profileIsShown, SetProfileIsShown] = useState<undefined | number>(
    undefined
  );

  return (
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
              <button
                key={itemIdx}
                onMouseEnter={() => {
                  SetProfileIsShown(itemIdx);
                }}
                onMouseLeave={() => {
                  SetProfileIsShown(undefined);
                }}
              >
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
                {itemIdx === profileIsShown && (
                  <ProfileInformationPopup item={item} />
                )}
              </button>
            );
          })}
    </div>
  );
};

export default SuggestedAccounts;

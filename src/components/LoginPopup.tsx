import React, { useState } from "react";
import { Modal } from "react-overlays";
import GoogleIcon from "../assets/img/Google.svg";
import TwitterIcon from "../assets/img/TwitterIcon.svg";
import FacebookIcon from "../assets/img/FacebookIcon.svg";
import Button from "./Button";

type Props = {
  showModal: boolean;
  handleClose: () => void;
};

const LoginPopup = ({ showModal, handleClose }: Props) => {
  const renderBackdrop = () => (
    <div
      onClick={() => {
        handleClose();
      }}
      className="backdrop"
    />
  );

  return (
    <Modal className="modal" show={showModal} renderBackdrop={renderBackdrop}>
      <div>
        <h1>Sign in to TikTok</h1>
        <Button icon={GoogleIcon} label="Continue with Google" />
        <Button
          marginTop={1}
          icon={FacebookIcon}
          label="Continue with Facebook"
        />
        <Button
          marginTop={1}
          icon={TwitterIcon}
          label="Continue with Twitter"
        />
      </div>
    </Modal>
  );
};

export default LoginPopup;

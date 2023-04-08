import React, { useState } from "react";
import { Modal } from "react-overlays";
import GoogleIcon from "../assets/img/Google.svg";
import TwitterIcon from "../assets/img/TwitterIcon.svg";
import FacebookIcon from "../assets/img/FacebookIcon.svg";
import Button from "./Button";
import { initFirebase } from "../../firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

type Props = {
  showModal: boolean;
  handleClose: () => void;
};

const LoginPopup = ({ showModal, handleClose }: Props) => {
  const app = initFirebase();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signIn = async (provider: any) => {
    const result = await signInWithPopup(auth, provider);
    handleClose();
  };

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
        <Button
          icon={GoogleIcon}
          label="Continue with Google"
          onClick={() => {
            signIn(googleProvider);
          }}
        />
      </div>
    </Modal>
  );
};

export default LoginPopup;

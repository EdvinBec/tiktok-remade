//Components
import React from "react";
import { Modal } from "react-overlays";
import Button from "./Button";

//Image
import GoogleIcon from "../assets/img/Google.svg";

//Functions
import { db, initFirebase } from "../../firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

type Props = {
  showModal: boolean;
  handleClose: () => void;
};

const LoginPopup = ({ showModal, handleClose }: Props) => {
  const app = initFirebase();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const [values, error] = useCollectionData<any>(collection(db, "users"));

  const addUserToDatabase = async (
    uid: string,
    displayName: string | null,
    email: string | null,
    photoURL: string | null
  ) => {
    let isAlreadyRegistered = false;

    values?.forEach((item) => {
      if (item.uid === uid) {
        isAlreadyRegistered = true;
      }
    });

    if (!isAlreadyRegistered) {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          uid: uid,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
          likes: 0,
          followers: 0,
        });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  const signIn = async (provider: any) => {
    const result = await signInWithPopup(auth, provider);
    const { displayName, uid, photoURL, email } = result.user;

    addUserToDatabase(uid, displayName, email, photoURL);

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

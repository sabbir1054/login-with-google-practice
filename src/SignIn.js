// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { firebaseConfig } from "./firebase.config";

initializeApp(firebaseConfig);

const SignIn = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
  });

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      const signedOutUser = {
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
      };
      setUser(signedOutUser);
    }).catch(err => {
      console.log(err);
    })
  };
  return (
    <div style={{ textAlign: "center", marginTop: "10vh" }}>
      {user.isSignedIn ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Click me for Google SignIn</button>
      )}
      {user.isSignedIn && (
        <div>
          <img src={user.photo} alt="" style={{ marginTop: "10px" }} />
          <h2>Welcome, {user.name}</h2>
          <h5>Your mail :{user.email}</h5>
        </div>
      )}
    </div>
  );
};

export default SignIn;

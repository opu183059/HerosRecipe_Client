import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const Authcontect = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (curentUser) => {
      // console.log("auath state change", curentUser);
      setUser(curentUser);
      setLoading(false);
    });
    return () => {
      unsubscrive();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    signGoogle,
  };
  return (
    <Authcontect.Provider value={authInfo}>{children}</Authcontect.Provider>
  );
};

export default AuthProvider;

import React, { useContext, useEffect, useState } from "react";
import { Authcontect } from "../providers/AuthProvider";
import Banner from "./Banner";
import Galary from "./Galary";
import Contact from "./Contact";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://project-1-server-opu183059.vercel.app/allData")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);
  const { user } = useContext(Authcontect);

  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
    // console.log(displayName, email, photoURL, uid);
  }

  return (
    <div>
      <Banner></Banner>
      <Galary></Galary>
      <Contact></Contact>
    </div>
  );
};

export default Home;

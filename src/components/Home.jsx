import React, { useContext, useEffect, useState } from "react";
import { Authcontect } from "../providers/AuthProvider";
import Banner from "./Banner";
import Galary from "./Galary";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://project-1-server-opu183059.vercel.app/allData")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);
  const user = useContext(Authcontect);
  return (
    <div>
      <Banner></Banner>
      <Galary></Galary>
    </div>
  );
};

export default Home;

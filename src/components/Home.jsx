import React, { useContext, useEffect, useState } from "react";
import { Authcontect } from "../providers/AuthProvider";
import Banner from "./Banner";
import Galary from "./Galary";
import Contact from "./Contact";
import Chef from "./Chef";
import Todayevent from "./Todayevent";
import About from "./About";
import Todayspick from "./Todayspick";

const Home = () => {
  const { user } = useContext(Authcontect);
  return (
    <div>
      <Banner></Banner>
      <Todayspick></Todayspick>
      <About></About>
      <Chef></Chef>
      <Todayevent></Todayevent>
      <Galary></Galary>
      <Contact></Contact>
    </div>
  );
};

export default Home;

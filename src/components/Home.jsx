import React, { useContext, useEffect, useState } from "react";
import { Authcontect } from "../providers/AuthProvider";

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
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/2YHpXtD/slider-2.jpg')] bg-cover">
      <div className="hero-content text-center">
        <div className=" max-w-screen-lg">
          <h1 className="text-2xl  text-stone-400 font-akaya">welcome to</h1>
          <h1 className=" text-7xl text-amber-500 font-akaya">
            SULTANs recipe
          </h1>
          <p className="py-6 text-stone-400">
            your go-to source for delicious and easy-to-follow recipes! Our
            mission is to inspire you to get creative in the kitchen and help
            you discover the joy of cooking. From quick weeknight dinners to
            decadent desserts, we've got something for every taste and occasion.
            Follow us for mouthwatering recipe ideas and helpful cooking tips.
            Let's get cooking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

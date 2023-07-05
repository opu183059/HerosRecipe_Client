/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <div className=" min-h-screen  bg-[url('https://www.archanaskitchen.com/media/k2/items/cache/b20e1b0483ae02403352523456c51596_XL.jpg')] bg-cover bg-fixed">
      <div className="text-white w-full h-screen bg-black/60 flex flex-row-reverse items-center justify-center gap-5">
        <div className="left w-1/2 flex justify-start p-10">
          <div className="w-7/12 aboutDiv">
            <img
              className="aboutImg border-r-8 border-l-8  border-amber-500"
              src="https://www.lastingredient.com/wp-content/uploads/2016/08/burst-tomato-pasta15.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="right w-1/2 pl-40 text-right relative">
          <h3 className="uppercase text-gray-400/20 font-bold absolute right-0 -top-12 text-7xl">
            About us
          </h3>
          <h1 className="mb-5 mt-5 text-amber-500 font-akaya font-bold text-5xl">
            Hero's recipe
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            voluptatem. Exercitationem reiciendis temporibus vitae iusto
            doloremque amet quis omnis aut aspernatur, maxime consectetur ipsam
            molestias sapiente culpa velit labore? Aut eos quibusdam quidem modi
            mollitia similique molestias natus voluptatem cum totam fugiat
            voluptas sapiente praesentium nam facere, impedit consequatur
            voluptate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

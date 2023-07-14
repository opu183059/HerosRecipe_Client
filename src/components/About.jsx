/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <div className=" min-h-screen  bg-[url('https://www.archanaskitchen.com/media/k2/items/cache/b20e1b0483ae02403352523456c51596_XL.jpg')] bg-cover bg-fixed">
      <div className="text-white w-full h-screen bg-black/60 lg:flex flex-row-reverse items-center justify-center gap-5">
        <div className="left lg:w-1/2 flex justify-start p-10">
          <div className="w-7/12 aboutDiv hidden lg:block">
            <img
              className="aboutImg border-r-8 border-l-8  border-amber-500"
              src="https://www.lastingredient.com/wp-content/uploads/2016/08/burst-tomato-pasta15.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="right lg:w-1/2 lg:pl-40 p-5 lg:text-right relative">
          <h3 className="uppercase text-gray-400/20 font-bold absolute lg:right-0 lg:-top-12 -top-5 lg:text-7xl text-4xl">
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

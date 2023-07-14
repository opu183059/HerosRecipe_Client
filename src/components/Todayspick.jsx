/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Rating from "react-rating";

const Todayspick = () => {
  return (
    <div className="min-h-screen p-4 md:p-14 bg-base-100">
      <h1 className="text-base md:text-lg items-center flex justify-center font-semibold mb-8">
        Today's Best
        <span className="text-3xl md:text-5xl text-amber-600 font-akaya ms-2">
          Recipe
        </span>
      </h1>
      <div className="lg:flex justify-between gap-5 items-center">
        <div className="left lg:w-1/2 flex justify-center relative">
          <div className="w-7/12 ">
            <img
              className="h-auto max-w-full rounded-lg shadow-md border-[4px] border-white"
              src="https://www.acouplecooks.com/wp-content/uploads/2019/09/Sweet-Potato-Wedges-004.jpg"
              alt=""
            />
          </div>
          <div className="w-4/12 absolute right-12 -bottom-8 rounded-2xl">
            <img
              className="h-auto max-w-full rounded-xl border-white border-8 shadow-2xl"
              src="https://w7.pngwing.com/pngs/728/838/png-transparent-chef-chef-s-uniform-celebrity-chef-cook-chef-kitchen-food-hat.png"
              alt=""
            />
          </div>
        </div>
        <div className="right lg:w-1/2 flex justify-start">
          <div>
            <h2 className="card-title lg:mt-0 mt-10 text-lg md:text-xl font-bold mb-2">
              Name:
              <span className="ms-1 text-amber-800">Spaghetti Carbonara</span>
            </h2>
            <h4 className="-mt-1 mb-2">
              A classic Roman dish made with pasta, eggs, cheese, and pancetta.
            </h4>
            <p className="mb-2 -mt-2 -ms-1 flex items-center">
              <Rating
                readonly
                placeholderRating={4.9}
                emptySymbol={
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-gray-300 dark:text-white-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                }
                placeholderSymbol={
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                }
                fullSymbol={
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                }
              ></Rating>{" "}
              4.9 out of 5
            </p>
            <h1 className="md:mt-8 mt-4 text-2xl text-amber-800 font-akaya font-medium">
              Coocking Method
            </h1>
            <p>
              Bring a large pot of salted water to a boil. In a large bowl,
              whisk together the eggs and Pecorino Romano cheese. Cook the
              spaghetti according to the package instructions until al dente.
              While the spaghetti is cooking, heat the pancetta in a large
              skillet over medium heat until crispy. Drain the spaghetti and add
              it to the skillet with the pancetta, tossing to coat the pasta
              with the pancetta fat. Remove the skillet from the heat and add
              the egg mixture to the pasta, tossing quickly to coat the pasta
              and cook the eggs. Season with salt and pepper to taste and serve
              immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todayspick;

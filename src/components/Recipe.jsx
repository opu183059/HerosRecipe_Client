import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Authcontect } from "../providers/AuthProvider";
import Recipedetailscard from "./Recipedetailscard";

const Recipe = () => {
  const { id } = useParams();
  const { data } = useContext(Authcontect);
  //   console.log(id);
  //   console.log(data);
  const recipe = data.find((recipe) => recipe.id == id);
  // console.log(recipe);
  // console.log(recipe.recipes);

  return (
    <div>
      <div className="banner mb-10">
        {/* banner section  */}
        <div className="hero min-h-full bg-base-100 my-1 md:my-20 px-0 md:px-24">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={recipe.profile_picture}
              className=" max-w-xs md:max-w-sm rounded-lg shadow-2xl"
            />
            <div className=" text-center md:text-left ">
              <h1 className="text-amber-700 text-4xl md:text-5xl lg:text-7xl font-akaya font-bold">
                {recipe.name}
              </h1>
              <p className="py-6">{recipe.short_bio}</p>
            </div>
          </div>
        </div>
        {/* experience sectin  */}
        <div className="likesExperience">
          <h1 className=" mt-8 text-base md:text-lg items-center flex justify-center font-semibold mb-5">
            <span className="text-2xl md:text-4xl text-amber-700 font-akaya me-2">
              {recipe.name}
            </span>
            at a glance
          </h1>
          <div className="flex justify-center ">
            <div className="stats shadow border-0 p-4 md:border-2 border-amber-700">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <img
                    className="inline-block w-8 h-8 stroke-current"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/52/Heart_icon_red_hollow.svg"
                    alt=""
                  />
                </div>
                <div className="stat-title text-gray-600">Total Likes</div>
                <div className="stat-value text-amber-800">{recipe.likes}k</div>
                <div className="stat-desc text-gray-600">
                  {recipe.rating.number * 10}% more than last month
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img
                    className="inline-block w-8 h-8 stroke-current"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/achievement-award-medal-icon.svg"
                    alt=""
                  />
                </div>
                <div className="stat-title text-gray-600">Experience</div>
                <div className="stat-value text-amber-800">
                  {recipe.years_of_experience}
                </div>
                <div className="stat-desc text-gray-600">Successful years</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src={recipe.profile_picture} />
                    </div>
                  </div>
                </div>
                <div className="stat-title text-gray-600">Successfully</div>
                <div className="stat-value text-amber-800">
                  {recipe.number_of_recipes}
                </div>
                <div className="stat-desc text-gray-600">Recipe's done yet</div>
              </div>
            </div>
          </div>
        </div>
        {/* Recipies cards */}
        <h1 className="mt-10 text-base md:text-lg items-center flex justify-center font-semibold md:mb-8">
          <span className="text-2xl md:text-4xl text-amber-700 font-akaya me-2 mb-1">
            Recipe's ( {recipe.number_of_recipes} )
          </span>
        </h1>
        {recipe.recipes.map((recipeDetails) => (
          <Recipedetailscard
            key={recipeDetails.id}
            recipeDetails={recipeDetails}
          ></Recipedetailscard>
        ))}
      </div>
    </div>
  );
};

export default Recipe;

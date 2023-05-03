import React from "react";
import { Link } from "react-router-dom";

const Chefards = (props) => {
  //   const cardData = props;
  //   console.log(cardData);
  return (
    <div>
      <div className="shadow-card p-4 text-center flex flex-col transition duration-200 rounded-xl shadow-md hover:backdrop-blur-sm border-1 ring-0 ring-amber-500 border-amber-600 hover:shadow-xl hover:-mt-2">
        <div className="avatar">
          <div className="w-48 mx-auto">
            <img
              className="max-w-48 rounded-xl border-2 ring-3 ring-amber-900 ring-offset-1 ring-offset-amber-800"
              src={props.cdata.profile_picture}
              alt="chef image"
            />
          </div>
        </div>
        <div className="chefDetails text-base font-normal">
          <h4 className="font-medium text-2xl text-amber-700 font-akaya mt-4">
            {props.cdata.name}
          </h4>
          <p className="">
            Years of experience:
            <span className="ms-1 font-bold">
              {props.cdata.years_of_experience}
            </span>
          </p>
          <p className="">
            Number of Recipe:
            <span className="ms-1 font-bold">
              {props.cdata.number_of_recipes}
            </span>
          </p>
          <p className="mb-3">
            Likes:
            <span className="ms-1 font-bold">{props.cdata.likes}</span>
          </p>
          <button className="px-3 py-2 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-700 to-amber-800 hover:bg-gradient-to-l">
            {/* <a href={propid}>View details</a> */}
            <Link to={"/recipe/" + props.cdata.id}>View Recipe</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chefards;

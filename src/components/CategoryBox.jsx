import React from "react";
import { NavLink } from "react-router-dom";

const CategoryBox = (props) => {
  return (
    <NavLink to={props.href}>
      <div
        className={`${
          props.height || "h-96"
        } group rounded relative overflow-hidden border shadow`}
      >
        <img
          className="h-full rounded absolute object-cover group-hover:scale-105"
          src={props.img}
        />
        <p className="relative rounded bg-gradient-to-t from-gray-950 text-white h-full text-xl font-semibold flex items-end justify-center pb-10">
          {props.name}
        </p>
      </div>
    </NavLink>
  );
};

export default CategoryBox;
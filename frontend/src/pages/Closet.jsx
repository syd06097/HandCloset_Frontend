import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import ClosetItem from "../components/ClosetItem";
const Closet = () => {
  return (
    <div>
      <h1>Closet</h1>
      <CategoryMenu />
      <ClosetItem />
    </div>
  );
};

export default Closet;

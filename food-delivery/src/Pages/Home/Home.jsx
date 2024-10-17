import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/Explore Menu/ExploreMenu";
import FoodDisplay from "../../components/Food Display/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
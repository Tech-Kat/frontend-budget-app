import React from "react";
import Money from "../Components/Money.js";

const Home = () => {
  return (
    <div className="Home">
      <h2 className="welcome"><strong>WELCOME TO MY BUDGETING APP!!</strong></h2>
      <Money />
    </div>
  );
};

export default Home;

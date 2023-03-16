import React from "react";
import Food from '../../Assets/Top Categories/Food.png'
import Treat from '../../Assets/Top Categories/Treat.png'
import supplements from '../../Assets/Top Categories/supplements.png'
import classes from './Categories.module.css'
import SingleCategory from "./SingleCategory";

const Nutritions = () => {
  return (
    <div >
      <h3>Top Categories Searched</h3>
      <div className={classes.CategoryContainer}>
        <SingleCategory image={Food} title="Dogs Food"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
        <SingleCategory image={Treat} title="Dog Treats"/>
      </div>
    </div>
  );
};

export default Nutritions;

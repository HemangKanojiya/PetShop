import React from 'react'
import whiskas from '../../Assets/Whiskas_final 6.png'
import classes from './SingleNutrition.module.css';

type Props ={
    nutritionName: string;
}

const SingleNutrition:React.FC<Props> = ({nutritionName}) => {
  return (
    <div className={classes.singleNutrition}>
        <img src={whiskas} alt="Whiskas Nutrition" />
        <div className={classes.nutritionTitle}>{nutritionName}</div>
    </div>
  )
}

export default SingleNutrition;
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const MealPreviw = ({ meal }) => {

	return (
		<div className='meal-previw'>
			<Link to={`/meals/${meal.idMeal}`}>
				<img src={meal.strMealThumb} alt={meal.strMeal} />
			</Link>
		</div>
	);
};

export default MealPreviw;

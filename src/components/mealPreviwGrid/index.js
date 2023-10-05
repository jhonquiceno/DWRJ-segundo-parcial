import {React, useState, useEffect} from 'react';
import {FetchMealByFirstLetter} from '../../services/mealtService';
import MealPreview from "../mealPreview/index";
import './index.css';

const MealPreviwGrid = () => {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		async function Data() {
			const meals = await FetchMealByFirstLetter('b');
			setMeals(meals);
		}
		Data();
	}, []);

	console.log(meals)

	return (
		<div className='meal-grid'>
			{meals.map((meal) => (
				<MealPreview meal={meal} />
			))}	
		</div>
	);
};

export default MealPreviwGrid;

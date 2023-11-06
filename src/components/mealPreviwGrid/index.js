import {React, useState, useEffect} from 'react';
import {FetchMealByFirstLetter, SearchMealByName} from '../../services/mealtService';
import MealPreview from "../mealPreview/index";
import {useSearch} from "../../services/context"
import './index.css';

const MealPreviwGrid = () => {
	const [meals, setMeals] = useState([]);
	const {search} = useSearch();

	useEffect(() => {
		async function Data() {
			const meals = await FetchMealByFirstLetter('b');
			setMeals(meals);
		}
		Data();
	}, []);

	useEffect(()=>{
        setMeals([])
        async function Data(){
        const data = await SearchMealByName(search);
        setMeals(data);
    }
        Data()
}, [search]);

	console.log(meals)

	return (
		<div className='meal-grid'>
			{meals?meals.map((meal) => (
				<MealPreview meal={meal} />
			)):<div>Loading...</div>}	
		</div>
	);
};

export default MealPreviwGrid;

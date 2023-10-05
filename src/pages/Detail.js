import {React, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {FetchMealById} from '../services/mealtService';
import '../App.css';

function Detail() {
    const {id} = useParams([]);
    const [meal, setMeal] = useState(null)

	useEffect(() => {
		async function Data() {
			const data = await FetchMealById(id);
			setMeal(data);
		}
		Data();
	}, [id]);

	console.log(id)
	return (
		<div>
            {meal && (
                <div className='meal-detail-container'>
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <p>{meal.strInstructions}</p>
                </div>
            )}
        </div>
	);
}

export default Detail;
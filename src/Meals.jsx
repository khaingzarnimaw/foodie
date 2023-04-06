import axios from 'axios'
import React from 'react'
import Card from "./Card"
import  {useEffect,useState} from 'react'

const Meals = () => {
const [meals,setMeals]= useState ([]);
const [isLoading,setIsLoading] = useState(true);

//မသိဘူး
const getMeals = async()=>{
  const {data}= await axios.get(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    );
    setMeals(data.meals);
    setIsLoading(false);
};

useEffect(() => {
   getMeals();
},[]);

return ( 
  <>
  {isLoading ? (
     <h1>loading...</h1> 
   
     ): (<div className='flex flex-wrap gap-5 py-10'>
      {/* {meals?.map()=><h1 key={idMeal}>{strmael}</h1>} */}
      {/* {meals?.map((meal)=> <h1 key={meal.idMeal}>{meal.strMeal}</h1> )} */}
      {meals?.map((meal)=> ( 
         <Card key={meal.idMeal} meal={meal}/>
     ))}
     </div>
     )}
  </>//loading စစ်တာ
  );
};

export default Meals

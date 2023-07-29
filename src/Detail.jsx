import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import {AiFillYoutube} from "react-icons/ai"

import axios from "axios"
import Loading from './Loader/Loading'


const Detail = () => {
  const {id} = useParams();
  const [meal,setMeals] = useState({})
  const [isLoading,setIsLoading] = useState(true);
  //useParams  ကိုခေါ်ထားတဲ့ function
  const getSingleMeal = async() =>{
    const{data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    // console.log(data.meals[0]);
     setMeals(data?.meals[0])
     setIsLoading(false);
  }
  useEffect(()=>{
    getSingleMeal()
  },[])
  return (
    <>
    {isLoading? (
      <Loading /> 
      ):(
    // <div>Detail - {id}</div> (id ထွက်လားမထွက်လား အရင်စစ်ထားတာ)(${id} ရဲ့လုပ်ဆောင်ချက်)
    <div className='flex flex-col gap-5 ml-10 my-2'>
      <img src={meal.strMealThumb} alt="" width={"300px"} className="rounded-xl shadow-xl"/>
      <div className="text-white bg-pink-500 w-20 text-center textt-sm rounded-lg">{meal.strCategory}</div>
      <h1 className="text-2xl">{meal.strMeal}</h1>
    <div>
      <h2 className="text-2xl mb-3" >Instructions</h2>
      <p className="tracking-wider leading-6 text-gray-500">{meal.strInstructions}</p>
      </div>
    <div className='flex gap-5 items-center'>
      
      <a href={meal.strYoutube} target="__blank"><AiFillYoutube className='text-red-600 text-5xl cursor-pointer'/></a> 
      <p className="text-gray-500">Watch on YouTobe</p>
    </div>
   </div>)}
  </> //condition စစ်ထားတာ 
  );
};

export default Detail;


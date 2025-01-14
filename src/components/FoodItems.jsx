import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import {useSelector} from 'react-redux';


function FoodItems() {
  const category = useSelector(state => state.category.category); // Get the category from the store
  const search= useSelector(state => state.search.search); // Get the search input from the store
  const handleToast= (name)=>{
    toast.success(`${name} added to cart`,);
  }

  return (
    <>
       <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => { // Filter the food items based on the category and search input
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  )
}

export default FoodItems
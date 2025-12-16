import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //state variable to hold the list of restaurants
  // it can be implemented using useState hook
  // its normal javaScript function
  // two very important hooks in react
  // useState and useEffect
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchData = async () => {
    // API call to fetch data
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    console.log(json);
    // artificial delay before updating state (10 seconds)
    // await sleep(10000);
    // console.log("Resuming after 10s delay");

    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setlistOfRestaurants(
      json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Callback function and dependency array
  //Callback function will be executed after component is rendered
  // dependency array is used to control when the useEffect should be called
  // If you need to do something after rendering the component, you can use useEffect with an empty dependency array

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic to be implemented
            const filteredlist = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setlistOfRestaurants(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          console.log(restaurant),
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;

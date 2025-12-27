import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resid,resname } = useParams();

    useEffect(() => {
        // only fetch when resid is available
        if (resid) fetchMenu();
    }, [resid]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resid);
        const json = await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.card?.card?.info);
        setResInfo(json?.data?.cards[2]?.card?.card?.info);
        console.log(json.data);
    };

if (resInfo === null) return <Shimmer />;
  
  return (
    <div>   
        <h1>{resInfo.name}</h1>
        <h2>Menu</h2>
        <ul>
            <li>Paneer Butter Masala</li>
            <li>Dal Makhani</li>
            <li>Jeera Rice</li>
            <li>Naan</li>
            <li>Gulab Jamun</li>
        </ul>
    </div>
  );
}

export default RestaurantMenu;
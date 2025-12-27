import { CDN_URL } from "../utils/constants";   

const RestaurantCard = (props) => {
  
  const { resData } = props;
  //console.log(resData);
const {name,cloudinaryImageId,avgRatingString,cuisines,sla,costForTwo} = resData ? resData : {};

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
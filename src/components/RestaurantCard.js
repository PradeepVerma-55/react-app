import { CDN_URL } from "../utils/constants";   

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
const {name,cloudinaryImageId,avgRatingString,cuisines} = resData ? resData : {};

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
    </div>
  );
};
export default RestaurantCard;
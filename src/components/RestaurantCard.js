import { CARD_LOGO } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resName } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resName?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CARD_LOGO + cloudinaryImageId}
      />
      <h4 className="res-name">{name}</h4>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;

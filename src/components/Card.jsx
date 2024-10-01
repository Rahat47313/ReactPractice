import PropTypes from "prop-types";
export default function Card(props) {
  let badgeText
  if(props.openSpots === 0)
  {badgeText = "SOLD OUT"}
  else if(props.location === "Online")
  {badgeText = "ONLINE"}
  return (
    <>
      <div>
        <div className="pb-2 relative">
          {badgeText && (
            <div className="bg-white border m-[5px] p-[2px] absolute">
              {badgeText}
            </div>
          )}
          <img
            className="w-[200px] h-[250px] rounded-[10px]"
            src={props.img}
            alt=""
          />
        </div>
        <p className="text-[12px]">
          <span className="text-red-400 text-[15px]">★</span> {props.stats.rate} (
          {props.stats.reviewCount}) • {props.location}
        </p>
        <p className="text-[12px]">{props.title}</p>
        <p className="text-[12px]">
          <b>From ${props.price}</b> / person
        </p>
      </div>
    </>
  );
}

Card.propTypes = {
  openSpots: PropTypes.number,
  location: PropTypes.string,
  img: PropTypes.string,
  stats: PropTypes.object,
  // rate: PropTypes.number,
  // reviewCount: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
};

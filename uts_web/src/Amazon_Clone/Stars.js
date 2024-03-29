import { FaStar , FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Stars({ stars, reviews }) {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;
    return stars >= index + 1 ? (
      <FaStar />
    ) : stars >= number ? (
      <FaStarHalfAlt />
    ) : (
      <AiOutlineStar />
    );
  });

  return (
    <>
        <span  className="my-2 text-warning">{starRating}  <span className="text-dark">( {reviews} reviews )</span></span>

    </>
  );
}

export default Stars;

import { useDispatch, useSelector } from "react-redux";
import { setRatingFilter } from "../../store/slices/productsSlice";

const Rating = () => {
  const dispatch = useDispatch();
  const selectedRating = useSelector((state) => state?.filters.rating);

  const handleRatingFilterChange = (rating) => {
    dispatch(setRatingFilter(rating));
  };

  const renderStars = (filledStars) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span
          key={index}
          onClick={() => handleRatingFilterChange(index + 1)}
          className={`cursor-pointer text-xl ${
            index < filledStars ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          ★
        </span>
      ));
  };

  return (
    <div>
      <h3 className="text-lg mb-1 font-semibold">Rating</h3>
      <div className="flex space-x-1">{renderStars(selectedRating || 0)}</div>
      <p className="text-sm mt-2">Selected Rating: {selectedRating || "All"}</p>
    </div>
  );
};

export default Rating;

import { useDispatch } from "react-redux";
import { CATEGORIES, RATINGS } from "../../utils/constant";
import { useState } from "react";
import { addFilterByCategory, addFilterByPrice, addFilterByRating } from "../../store/slices/productsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    dispatch(addFilterByCategory({ category: value || null }));
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
    dispatch(addFilterByPrice({ priceRange: [0, value] }));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    let updatedRatings;

    if (e.target.checked) {
      updatedRatings = [...selectedRatings, value];
    } else {
      updatedRatings = selectedRatings.filter((rating) => rating !== value);
    }

    setSelectedRatings(updatedRatings);
    dispatch(addFilterByRating({ rating: Math.max(...updatedRatings) || null }));
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="space-y-4">
        <div className="mb-5">
          <h3 className="text-lg mb-1 font-semibold">Category</h3>
          <select
            className="w-full p-2 border rounded-md"
            value={category || ""}
            onChange={handleCategoryChange}
          >
            {CATEGORIES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <h3 className="text-lg mb-1 font-semibold">Price Range</h3>
          <input
            type="range"
            className="w-full text-primary"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={handlePriceRangeChange}
            style={{
              accentColor: "#745BE7", // Customize the slider thumb color here
            }}
          />
          <p className="text-sm">
            {priceRange[0]} - {priceRange[1]}
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-lg mb-1 font-semibold">Rating</h3>
          <div className="space-y-2">
            {RATINGS.map(({ value, label }) => (
              <div key={value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`rating-${value}`}
                  value={value}
                  checked={selectedRatings.includes(value)}
                  onChange={handleRatingChange}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`rating-${value}`}
                  className="text-primary cursor-pointer"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

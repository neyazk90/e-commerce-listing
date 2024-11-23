import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/slices/productsSlice";

const Category = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state?.filters.category);

  const handleCategoryChange = (category:string) => {
    dispatch(setCategory(category));
  };

  return (
    <div>
      <h3 className="text-lg mb-1 font-semibold">Category</h3>
      <ul className="space-y-1">
        {CATEGORIES?.map((category:string) => (
          <li
            key={category}
            className={`cursor-pointer ${
              selectedCategory === category ? "text-primary font-bold" : "text-gray-600"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

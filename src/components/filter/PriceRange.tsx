// import { useDispatch } from "react-redux";
// import { addFilterByPrice } from "../../store/slices/productsSlice";


// const PriceRange = () => {
//     const dispatch = useDispatch();

//     const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = Number(e.target.value);
       
//         dispatch(addFilterByPrice({ [0, value]: [0, value] }));
//     };
    

//   return (
//       <>
//       <h3 className="text-lg mb-1 font-semibold">Price Range</h3>
//           <input
//             type="range"
//             className="w-full text-primary"
//             min="0"
//             max="1000"
//             value={}
//             onChange={handlePriceRangeChange}
//             style={{
//               accentColor: "#745BE7", // Customize the slider thumb color here
//             }}
//           />
          
//       </>
//   )
// }

// export default PriceRange

import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../../store/slices/productsSlice";

const PriceRange = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector((state) => state.filters.priceRange);

  const handlePriceRangeChange = (e) => {
    const newRange = [0, Number(e.target.value)];
    dispatch(setPriceRange(newRange));
  };

  return (
    <div>
      <h3 className="text-lg mb-1 font-semibold">Price Range</h3>
      <input
        type="range"
        className="w-full"
        min="0"
        max="1000"
        value={priceRange[1]}
        onChange={handlePriceRangeChange}
        style={{
            accentColor: "#745BE7", // Customize the slider thumb color here
        }}
      />
      <p className="text-sm">
        ${priceRange[0]} - ${priceRange[1]}
      </p>
    </div>
  );
};

export default PriceRange;


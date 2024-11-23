import { createSlice } from "@reduxjs/toolkit";

import { filterProductsByPriceRange, filterProductsByRating, getProducstByCategory, sortProducts } from "../../utils/helper";

const productsSlice = createSlice({
  name: "productsList",
  initialState: {
    products:  null,
    filteredProducts: null, 
    sortBy: "low-to-high", 
    filters: {
      category: null, 
      rating: null, 
      priceRange: [0, Infinity]
    },
    isLoading: false,
    isModalOpen:false,
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload; 
    },
    setSortBy: (state, action) => {
      state.filteredProducts =
        state.filteredProducts && sortProducts(state.filteredProducts, action.payload);
    },
    addFilterByCategory: (state, action) => {
      // if product not availble return
      if (!state.products) return; 

      if (!action.payload.category) {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = getProducstByCategory(state.products, action.payload.category!.toLowerCase() )
      }
    },
    
    addFilterByPrice: (state, action) => {
      state.filters.priceRange = action.payload.priceRange;
      state.filteredProducts =  filterProductsByPriceRange( state.filteredProducts, state.filters.priceRange);
       
    },
    addFilterByRating: (state, action) => {
      state.filters.rating = action.payload.rating; // Update the rating filter in state
      state.filteredProducts = filterProductsByRating(state.products, state.filters.rating)
    },
    setLoading: (state,action) => {
      state.isLoading = action.payload;
    },
    setModalOpen: (state,action) => {
      state.isLoading = action.payload;
     }
  },
  
});


export const { addProducts, setSortBy, addFilterByCategory, addFilterByPrice, addFilterByRating, setLoading, setModalOpen} = productsSlice.actions;
export default productsSlice.reducer;


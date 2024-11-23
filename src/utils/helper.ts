import { iProduct } from "../models/interface";

export const sortProducts = (products: iProduct[], sortBy: string) => {
  if (!products) return null;

  const sortedProducts = [...products];
  if (sortBy === "low-to-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high-to-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return sortedProducts;
};


export const getProducstByCategory = (products: iProduct[], category:string): iProduct[] | null => {
  
  if (!products) return null;
 
  return products.filter((product: iProduct) => {
    const matchesCategory = category ? product.category.toLocaleLowerCase().includes(category.toLowerCase()) : true;
   
    return matchesCategory; // && matchesRating && matchesPrice;
  });
};

export const filterProductsByPriceRange = (products: iProduct[], priceRange: [number, number]): iProduct[] | null => {
  if (!products || products.length === 0) return null;

  return products.filter((product: iProduct) => {
    const price = product.price || 0; // Default to 0 if price is not defined
    return price >= priceRange[0] && price <= priceRange[1];
  });
};


export const  filterProductsByRating = (products: iProduct[], rating: number): iProduct[] | null => {
  if (!products || products.length === 0) return null;

  return products.filter((product: iProduct) => {
    const productRating = product.rating?.rate || 0; // Default to 0 if no rating is available
    return productRating >= rating; // Keep products with a rating >= the filter
  });
};




import { useCallback, useEffect, useState } from "react";
import { get } from "../services/apiService";
import { useDispatch } from "react-redux";
import { addProducts, setLoading } from "../store/slices/productsSlice";

const useGetProducts = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1); // default value for page  1
  const [hasMore, setHasMore] = useState(true); // Whether more data is available

  const fetchProduct = useCallback(async () => {
    if (!hasMore) return;
    try {
      dispatch(setLoading(true));
      /* Pagination is not supported by Api, here api should be return only
        those page specfic data and then at the front end we can haldled the data appending data in existing store
      */
      const res = await get(`/products?limit=${page * 6}`);
      if (res.data.length > 0) {
        dispatch(addProducts(res.data));
        setPage((prevPage) => prevPage + 1); 
      } else {
        // flags for stop calling the API
        setHasMore(false); 
      }
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  },[hasMore, dispatch, page]);

  useEffect(() => {
    if (hasMore) {
      fetchProduct();
    }
  }, [hasMore]);

  return { fetchProduct, hasMore }; 
};

export default useGetProducts;

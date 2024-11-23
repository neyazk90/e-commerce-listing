
import React, { ChangeEvent, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, setSortBy } from '../store/slices/productsSlice';

import { iProduct } from '../models/interface';
import { SORTING } from '../utils/constant';
import ShimmerCard from './shared/ShimmerCard';
import useGetProducts from '../hooks/useGetProducts';

const Card = React.lazy(() => import('./shared/Card'));
// const Loader  = React.lazy(() => import('./shared/Loader'));
const ProductModal = React.lazy(() => import('./ProductModal'));


const ProductList = () => {
    const { fetchProduct,  hasMore } = useGetProducts(); 
    const dispatch = useDispatch();
    const productsList = useSelector((store: any) => store?.productsList?.filteredProducts);
    const isloading = useSelector((store: any) => store?.productsList?.isLoading);
    const isModalOpen = useSelector((store: any) => store?.productsList?.isLoading);

    const [selectedProduct, setSelectedProduct] = useState<iProduct | null>(null);
 
    let previousScrollY = 0; 
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > previousScrollY) {
          if (
            window.innerHeight + document.documentElement.scrollTop + 50 >=
            document.documentElement.offsetHeight
          ) {
            if (!isloading && hasMore) {
              fetchProduct(); 
            }
          }
        }
        previousScrollY = currentScrollY;
      };
    
    useEffect(() => {
          window.addEventListener("scroll", handleScroll); 
           // Cleanup function when component is destroyed
        return () => window.removeEventListener("scroll", handleScroll);
      }, [isloading, hasMore]);
    

    // Open Modal
    const openModalHandler = (product: iProduct) => {
        setSelectedProduct(product);
        dispatch(setModalOpen(true))
        // setIsModalOpen(true);
    };

    const closeModalHandler = () => {
        setSelectedProduct(null);
        // setIsModalOpen(false);
        dispatch(setModalOpen(false))
    };

    const sortHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortBy(e?.target?.value));
    }

    return (
        <>
            <div className='space-y-4 mb-5'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    <h2 className="text-xl text-left font-bold mb-4">Products</h2>
                    <select className='w-full p-2 border rounded-md' onChange={sortHandler}>
                        {
                            SORTING.map(({ value, label }) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {!productsList ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <ShimmerCard key={index} />
                    ))
                ) : (
                    productsList.map(({ id, title, image, category, price, rating, description }: iProduct) => (
                        
                        <Card
                            key={id}
                            image={image}
                            title={title}
                            price={price}
                            category={category}
                            rating={rating.rate}
                            onCardClick={() =>
                                openModalHandler({ id, title, image, category, price, rating, description })
                            }
                        />
                    ))
                )}
            </div>
            {/* { isloading && <Loader />}  currently hidden  */}

            {isModalOpen && selectedProduct && (
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductModal
                    selectedProduct={selectedProduct}
                    closeModalHandler={closeModalHandler}
                    />
                </Suspense>
            )}
        </>
    )
}

export default ProductList
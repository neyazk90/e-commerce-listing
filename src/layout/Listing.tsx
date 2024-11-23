import React, { Suspense } from "react";
import Filter from "../components/filter/Filter"

const ProductList = React.lazy(() => import('../components/ProductList'));


const Listing: React.FC = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
                    <aside className="bg-white shadow-md text-left rounded-lg p-4 w-full md:w-1/4">
                        <Filter />
                    </aside>
                    <main className="bg-white shadow-md rounded-lg p-4 w-full md:w-3/4">
                        <Suspense fallback={<div>Loading...</div>}>
                            <ProductList />
                        </Suspense>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Listing
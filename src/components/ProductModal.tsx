import { useEffect } from "react";
import { iProductModalProps } from "../models/interface"


const ProductModal: React.FC<iProductModalProps> = ({ selectedProduct, closeModalHandler }) => {


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModalHandler();
      }
    };

   
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event when on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModalHandler]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white relative rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closeModalHandler}
        >
          &times;
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full max-h-96 object-cover" />
          </div>
          <div className="flex flex-col space-y-4 text-left">
            <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
            <p className="text-gray-700">
              <strong>Category:</strong> {selectedProduct.category}
            </p>
            <p className="text-gray-700">
              <strong>Price:</strong> ₹{selectedProduct.price}
            </p>
            <p className="text-gray-700">
              <strong>Rating:</strong> {selectedProduct.rating.rate} ({selectedProduct.rating.count} reviews)
            </p>
            <p className="text-gray-700">
              <strong>Description:</strong> {selectedProduct.rating.rate} ({selectedProduct.description} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
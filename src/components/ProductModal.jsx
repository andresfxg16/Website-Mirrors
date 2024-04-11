import React from "react";
import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";

const ProductModal = ({ product, onClose }) => {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id == product.id);
  };

  const isProductInCart = checkProductInCart(product);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg overflow-y-auto shadow-md mx-4 md:mx-auto max-w-2xl w-full max-h-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        <div className="flex flex-col md:flex-row">
          <img
            className="md:w-1/2 h-auto md:h-auto object-contain p-4 md:order-1"
            src={product.image}
            alt={product.title}
          />
          <div className="p-4 md:p-6 md:w-1/2 md:order-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {product.title}
            </h2>
            <p className="text-gray-700">{product.description}</p>
            <div className="mt-3 md:mt-4 flex flex-col md:flex-row md:items-center">
              <p className="text-gray-700 mb-2 md:mb-0 md:mr-4">
                Price: ${product.price}
              </p>
              <p className="text-gray-700">Rating: ⭐{product.rating.rate}</p>
            </div>
            {/* Botón de agregar/eliminar del carrito */}
            <button
              style={{backgroundColor: isProductInCart ? "#EF4444" : "#3B82F6"}}
              className={`text-white font-bold py-2 px-4 rounded mt-4 md:mt-0 md:absolute md:right-4 md:bottom-4 transition-colors`}
              onClick={() =>
                isProductInCart ? removeFromCart(product) : addToCart(product)
              }
            >
              {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModal from "./ProductModal";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart";

const ProductBox = (product) => {

  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id == product.id);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const isProductInCart = checkProductInCart(product);

  return (
    <>
      <NavLink to={product.href} onClick={openModal}>
        <div className="group rounded relative shadow p-2 bg-white" title={product.title}>
          <img
            className={`${product.imgHeight || "h-48"} w-full rounded object-contain p-4 group-hover:scale-105`}
            src={product.image}
            alt={product.title}
          />
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-sm text-gray-500 mt-4 line-clamp-1">{product.title}</p>
              <p className="text-sm font-semibold mt-2">${product.price}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <p className="text-gray-700">Rating: ⭐{product.rating.rate}</p>
              {/* Botón de agregar al carrito */}
              <button
                style={{backgroundColor: isProductInCart ? "#EF4444" : "#3B82F6"}}
                className={`text-white font-bold py-2 px-4 rounded mt-4 md:mt-0 md:absolute md:right-4 md:bottom-4 transition-colors`}
                onClick={()=>isProductInCart?removeFromCart(product):addToCart(product)}
              >
                {isProductInCart? <RemoveFromCartIcon/> : <AddToCartIcon/>}
              </button>
            </div>
          </div>
        </div>
      </NavLink>
      {showModal && <ProductModal product={product} onClose={closeModal} />}
    </>
  );
};

export default ProductBox;

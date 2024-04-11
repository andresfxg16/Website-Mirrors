import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useId } from "react";
import { useCart } from "../hooks/useCart.js";
import { WhatsAppButton } from "./WhatsAppButton.jsx";

function CartItem({
  image,
  title,
  price,
  quantity,
  addToCart,
  removeFromCart,
}) {
  return (
    <li className="border-b border-gray-400 pb-5 mt-3 flex items-center">
      {/* Imagen del Producto */}
      <div className="mr-3">
        <img
          className="product-image aspect-w-16 aspect-h-9 rounded w-20"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-full md:w-3/4 lg:w-1/8">
        {/* Título del Producto */}
        <strong className="block text-sm">{title}</strong>
        {/* Precio del Producto */}
        <span className="block text-sm">${price}</span>
        {/* Texto para Eliminar */}
        <a
          className="block text-sm text-blue-700 cursor-pointer mt-1"
          onClick={removeFromCart}
        >
          Eliminar
        </a>
        <div className="flex items-center mt-1">
          {/* Botón de Agregar */}
          <small className="text-gray-600 mr-1">Cantidad: {quantity}</small>
          <button
            className="text-gray-900 rounded bg-gray-400 hover:bg-gray-600 hover:text-white border-none px-1 text-center ml-auto"
            onClick={addToCart}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}

function Header() {
  const cartCheckboxId = useId();
  const [showCart, setShowCart] = useState(false);

  const { cart, clearCart, addToCart, removeFromCart } = useCart();

  const navigations = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow bg-white relative w-[100%]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <NavLink to="/">
            <img
              className="h-8 sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Shopping Cart"
            />
          </NavLink>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          {/* Menú de opciones de navegación */}
          {navigations.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.href}
              className={({ isActive }) =>
                `text-gray-500 border-b hover:border-b-indigo-500 hover:text-indigo-500 px-4 py-4 h-full text-sm font-medium${
                  isActive ? " border-b-indigo-500 text-indigo-500" : ""
                }`
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center">
          {/* Carrito */}
          <label className="cursor-pointer mr-2" htmlFor={cartCheckboxId}>
            <CartIcon />
          </label>
          <input
            id={cartCheckboxId}
            type="checkbox"
            hidden
            onChange={toggleCart}
            checked={showCart}
          />
          {/* Botón de menú de hamburguesa */}
          <button className="block sm:hidden" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-2 sm:hidden z-50">
          {navigations.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.href}
              className={({ isActive }) =>
                `block px-4 py-2 text-gray-800 hover:bg-gray-200${
                  isActive ? " font-bold" : ""
                }`
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
      )}
      {/* Contenido del carrito */}
      {showCart && (
        <aside className="cart fixed inset-y-0 right-0 bg-gray-200 bg-opacity-100 p-4 sm:p-8 w-full lg:w-80 z-50 overflow-y-auto shadow-xl flex flex-col">
          {/* Contenido del carrito */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={toggleCart}
          >
            X
          </button>
          {cart.length === 0 ? (
            <div className="text-center">
              <img
                src="https://i.pinimg.com/564x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg"
                alt="Imagen Placeholder"
                className="product-image aspect-w-20 aspect-h-18 rounded w-full sm:w-[80%] lg:w-[60%] mx-auto block"
              />
              <small>No hay productos en el carrito.</small>
            </div>
          ) : (
            <>
              <ul>
                {cart.map((product) => (
                  <CartItem
                    key={product.id}
                    addToCart={() => addToCart(product)}
                    removeFromCart={() => removeFromCart(product)}
                    {...product}
                  />
                ))}
              </ul>
              <button
                className="text-white font-bold py-2 px-4 rounded mt-3 mx-auto block bg-red-500 hover:bg-red-700 border-none mb-4"
                onClick={clearCart}
              >
                <ClearCartIcon />
              </button>
              <div className="flex justify-center mt-auto">
                <WhatsAppButton />
              </div>
            </>
          )}
        </aside>
      )}
    </div>
  );
}

export default Header;

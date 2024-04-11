import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import Layout from "./components/Layout";
import { CartProvider } from "./context/cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

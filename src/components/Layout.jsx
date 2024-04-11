import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
import { Outlet } from "react-router-dom";
import Navbar from '../Nav/Navbar';
import Footer from '../Foot/Footer';
import ScrollToTop from "../Scroll/Scroll"
import RouteLoader from "../Loader/Loadernav";

export default function Layout() {
  return (
    <>
    <RouteLoader>
      <ScrollToTop />
      <Navbar />
     <main className="pt-20 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      </RouteLoader>
    </>
  );
}

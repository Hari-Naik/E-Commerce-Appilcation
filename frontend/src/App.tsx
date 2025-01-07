import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Auth = lazy(() => import("./pages/Auth"));
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Search = lazy(() => import("./pages/Search"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CheckoutSuccess = lazy(() => import("./pages/CheckoutSuccess"));
const Orders = lazy(() => import("./pages/Orders"));
const OrderDetails = lazy(() => import("./pages/OrderDetails"));

import Header from "./components/Header/Header";
import BackToTop from "./components/BackToTop/BackToTop";
import Loading from "./components/Loading/Loading";
import ProtectedRoute from "./pages/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <BackToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/account/login" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/viewcart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/account/orders" element={<Orders />} />
            <Route path="/order_details" element={<OrderDetails />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="bottom-center"
        theme="dark"
        hideProgressBar
        newestOnTop
        autoClose={3000}
      />
    </BrowserRouter>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Products from "../../pages/Products";
import Cart from "../../pages/Cart";
import Projects from "../../pages/Projects";
import ErrorPage from "../../pages/ErrorPage";
import Contact from "../../pages/Contact";
import WishList from "../../pages/WishList";
import SingleProductPage from "../../pages/SingleProdutPage";
// router shoud be wrap in Router or BrowserRouter
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/cart" element={<Cart singlepData={[]} image={""} />} />
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="singleProduct/:id" element={<SingleProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Routers;

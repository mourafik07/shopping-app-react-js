import Layout from 'layout';
import Cart from 'pages/Cart';
import Gallery from 'pages/Gallery';
import Home from 'pages/Home';
import ProductDetail from 'pages/ProductDetail';
import Shop from 'pages/Shop';
import { Routes, Route } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
    <Route path="/*" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="product-detail" element={<ProductDetail />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  </Routes>
  );
};


export default Routing;

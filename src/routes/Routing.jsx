import { Routes, Route } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;

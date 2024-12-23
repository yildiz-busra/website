import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import OrderPage from "./pages/OrderPage";
import SupportPage from "./pages/SupportPage";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <div style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;

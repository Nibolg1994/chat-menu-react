import React from "react";
import { Routes, Route } from "react-router-dom";
import DishDetailPage from "./DishDetailPage.jsx";
import MainPage from "./MainPage.jsx";
import OrderPage from "./OrderPage.jsx";
import CardPage from "./CardPage.jsx"; // <-- импорт MainPage
import { CartProvider } from "./context/CartContext";

const App = () => {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/dish" element={<DishDetailPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/cart" element={<CardPage />} />
            </Routes>
        </CartProvider>
    );
};

export default App;
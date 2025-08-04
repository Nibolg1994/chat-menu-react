import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import DishDetailPage from "./DishDetailPage.jsx";
import MainPage from "./MainPage.jsx";
import OrderPage from "./OrderPage.jsx";
import CardPage from "./CardPage.jsx"; // <-- импорт MainPage
import { CartProvider } from "./context/CartContext";
import ReservationPage from "./ReservationPage.jsx";
import {RestaurantProvider} from "./context/RestaurantContext.jsx";

const App = () => {
    const [slug, setSlug] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const restaurantSlug = params.get('slug');
        if (restaurantSlug) {
            setSlug(restaurantSlug);
        } else {
            console.warn('Не передан slug ресторана в query-параметре');
        }
    }, []);

    if (!slug) {
        return <div className="p-4 text-center text-gray-500">Загрузка ресторана...</div>;
    }

    return (
        <RestaurantProvider slug={slug}>
        <CartProvider>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/dish" element={<DishDetailPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/cart" element={<CardPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
            </Routes>
        </CartProvider>
        </RestaurantProvider>
    );
};

export default App;
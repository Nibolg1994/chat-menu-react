import React from "react";
import { Routes, Route } from "react-router-dom";
import DishDetailPage from "./DishDetailPage.jsx";
import MainPage from "./MainPage.jsx";
import OrderPage from "./OrderPage.jsx"; // <-- импорт MainPage

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/dish" element={<DishDetailPage />} />
            <Route path="/order" element={<OrderPage />} />
        </Routes>
    );
};

export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import DishDetailPage from "./DishDetailPage.jsx";
import MainPage from "./MainPage.jsx"; // <-- импорт MainPage

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/dish" element={<DishDetailPage />} />
        </Routes>
    );
};

export default App;
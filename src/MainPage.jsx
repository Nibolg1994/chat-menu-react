import React, { useState } from "react";
import DishCard from "./components/DishCard";
import CategorySlider from "./components/CategorySlider";
import CategoryToggle from "./components/CategoryToggle";
import CompactBottomBar from "./components/ComapctBottomBar.jsx";
import {useNavigate} from "react-router-dom";
import UserStatusBadge from "./components/UserStatusBadge";
import Header from "./components/Header";

/*const categories = [

    "Пицца", "Суши", "Гриль", "Напитки", "Десерты",
];*/

const categories = [
    { label: "Бургеры", icon: "burgers" },
    { label: "Салаты", icon: "salads" },
    { label: "Десерты", icon: "desserts" },
    { label: "Бургеры", icon: "burgers" },
    { label: "Салаты", icon: "salads" },
    { label: "Десерты", icon: "desserts" },
    { label: "Бургеры", icon: "burgers" },
    { label: "Салаты", icon: "salads" },
    { label: "Десерты", icon: "desserts" },
    { label: "Бургеры", icon: "burgers" },
    { label: "Салаты", icon: "salads" },
    { label: "Десерты", icon: "desserts" },
];

const dishes = [
    {
        title: "Маргарита",
        description: "Традиционная пицца с томатным соусом и сыром моцарелла",
        price: 450,
        image: "src/images/margarita.png",
        category: "Салаты",
    },
    {
        title: "Калифорния",
        description: "Ролл с крабом, огурцом и авокадо",
        price: 390,
        image: "src/images/margarita.png",
        category: "Салаты",
    },
    {
        title: "Индия",
        description: "Ролл с крабом, огурцом и авокадо",
        price: 390,
        image: "src/images/margarita.png",
        category: "Салаты",
    },
];

const MainPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("Салаты");
    const [openCategories, setOpenCategories] = useState(true);
    const navigate = useNavigate();

    const filtered = dishes.filter((d) => d.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-100 p-2">
            <Header
                userStatus="Морской гурман"
                city="Севастополь"
                workingHours="10:00–22:00"
            />


            {openCategories && (
                <CategorySlider
                    categories={categories}
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                />
            )}

            <div className="mt-4 mb-24 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 xs:px-2 sm:px-2" >
                {filtered.map((dish, i) => (
                    <DishCard
                        key={i}
                        title={dish.title}
                        description={dish.description}
                        price={dish.price}
                        image={dish.image}
                        onViewDetails={() => navigate("/dish", { state: { dish } })}
                        onAddToCart={() => console.log('onAddToCart')}
                        cartQuantity={1} // функция возвращает кол-во блюда в корзине
                    />
                ))}
            </div>

            <CompactBottomBar
                totalItems={1}
                totalPrice={2}
                onClick={() => console.log("Переход в корзину")}
            />
        </div>
    );
};

export default MainPage;
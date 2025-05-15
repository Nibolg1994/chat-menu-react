import React, { useState } from "react";
import DishCard from "./components/DishCard";
import CategorySlider from "./components/CategorySlider";
import CategoryToggle from "./components/CategoryToggle";

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
        image: "/images/margarita.jpg",
        category: "Пицца",
    },
    {
        title: "Калифорния",
        description: "Ролл с крабом, огурцом и авокадо",
        price: 390,
        image: "/images/california.jpg",
        category: "Суши",
    },
];

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("Пицца");
    const [openCategories, setOpenCategories] = useState(true);

    const filtered = dishes.filter((d) => d.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-bold">Меню</h1>
                <CategoryToggle
                    isOpen={openCategories}
                    onClick={() => setOpenCategories((prev) => !prev)}
                />
            </div>

            {openCategories && (
                <CategorySlider
                    categories={categories}
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                />
            )}

            <div className="mt-4 flex gap-4 overflow-x-auto px-2">
                {filtered.map((dish, i) => (
                    <DishCard key={i} {...dish} />
                ))}
            </div>
        </div>
    );
};

export default App;
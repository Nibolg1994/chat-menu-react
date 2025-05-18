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

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState("Салаты");
    const [openCategories, setOpenCategories] = useState(true);

    const filtered = dishes.filter((d) => d.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-100 p-2">
            <div className="flex justify-between items-center mb-2">
                <div className="flex-1 text-center">
                    <h1 className="text-xl font-medium font-inter">Меню</h1>
                </div>
              {/*  <CategoryToggle
                    isOpen={openCategories}
                    onClick={() => setOpenCategories((prev) => !prev)}
                />*/}
            </div>

            {openCategories && (
                <CategorySlider
                    categories={categories}
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                />
            )}

            <div className="mt-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 xs:px-2 sm:px-2" >
                {filtered.map((dish, i) => (
                    <DishCard key={i} {...dish} />
                ))}
            </div>
        </div>
    );
};

export default App;
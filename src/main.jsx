import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Icon } from "@iconify/react";
import "./index.css";

const categories = [
  { id: 1, name: "Пицца", icon: "twemoji:pizza" },
  { id: 2, name: "Бургеры", icon: "noto:hamburger" },
  { id: 3, name: "Кофе", icon: "twemoji:hot-beverage" },
  { id: 4, name: "Кофе", icon: "twemoji:hot-beverage" },
  { id: 5, name: "Кофе", icon: "twemoji:hot-beverage" },
];

const dishes = {
  1: [
    {
      id: 101,
      name: "Маргарита",
      price: "390 ₽",
      icon: "noto:pizza",
    },
    {
      id: 102,
      name: "Пепперони",
      price: "420 ₽",
      icon: "twemoji:pizza",
    },
  ],
  2: [
    {
      id: 201,
      name: "Чизбургер",
      price: "350 ₽",
      icon: "noto:hamburger",
    },
  ],
  3: [
    {
      id: 301,
      name: "Американо",
      price: "180 ₽",
      icon: "twemoji:hot-beverage",
    },
  ],
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
      <div className="min-h-screen bg-[#e6f4ff] px-4 pt-6 pb-24 font-inter">
        {!selectedCategory ? (
            <>
              <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                Категории
              </h1>
              <div className="grid grid-cols-3 gap-4">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center cursor-pointer"
                        onClick={() => handleCategoryClick(cat.id)}
                    >
                      <div className="bg-blue-100 p-3 rounded-full mb-2">
                        <Icon icon={cat.icon} className="text-3xl text-blue-500" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                  {cat.name}
                </span>
                    </div>
                ))}
              </div>
            </>
        ) : (
            <>
              <div className="flex items-center mb-6">
                <button
                    onClick={handleBack}
                    className="text-blue-600 font-medium mr-4"
                >
                  ← Назад
                </button>
                <h2 className="text-xl font-semibold text-gray-800">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {dishes[selectedCategory]?.map((dish) => (
                    <div
                        key={dish.id}
                        className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Icon icon={dish.icon} className="text-2xl text-blue-500" />
                        </div>
                        <div>
                          <div className="text-gray-800 font-medium">
                            {dish.name}
                          </div>
                          <div className="text-gray-500 text-sm">{dish.price}</div>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                        Добавить
                      </button>
                    </div>
                ))}
              </div>
            </>
        )}

        <button className="fixed bottom-4 left-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl shadow-xl">
          Перейти к заказу
        </button>
      </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
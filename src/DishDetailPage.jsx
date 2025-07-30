import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";
import PrimaryButton from "./components/PrimaryButton.jsx";
import {useCart} from "./context/CartContext.jsx";

const DishDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dish = location.state?.dish;
    const { addItem } = useCart();

    if (!dish) return <div className="p-4">Блюдо не найдено</div>;


    return (
        <div className="relative min-h-screen bg-white text-gray-800">
            {/* Назад */}
            <div className="absolute top-4 left-4 z-10">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-white/80 backdrop-blur p-2.5 rounded-lg shadow hover:scale-105 transition"
                >
                    <ArrowLeft size={22} />
                </button>
            </div>

            {/* Фото */}
            <div className="h-64 w-full overflow-hidden shadow-sm">
                <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Контент */}
            <div className="p-6">
                <h1 className="text-2xl font-semibold mb-4">{dish.title}</h1>

                {dish.description && (
                    <div className="mb-6">

                        <p className="text-gray-600 text-base leading-[1.8] whitespace-pre-line">
                            {dish.description}  Описание
                            Описание
                            Описание Описание Описание Описание Описание Описание Описание
                            Описание
                        </p>
                    </div>
                )}

                {/* Цена */}
                <div className="text-xl font-semibold text-gray-800 mb-6">
                    {dish.price} ₽
                </div>

                <PrimaryButton
                    onClick={() => addItem(dish)}
                    className="w-full flex items-center justify-center gap-2 py-3 text-base"
                >
                    <Plus size={18} />
                    Добавить в корзину
                    <span className="ml-2 bg-white/20 rounded px-2 text-sm">
                        1
                    </span>
                </PrimaryButton>
            </div>
        </div>
    );
};

export default DishDetailPage;
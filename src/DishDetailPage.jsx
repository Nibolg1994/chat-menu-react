import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";
import PrimaryButton from "./components/PrimaryButton.jsx";

const DishDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const dish = location.state?.dish;

    if (!dish) return <div className="p-4">Блюдо не найдено</div>;

    const handleAddToCart = () => {
        console.log("Добавлено в корзину:", dish.title);
    };

    return (
        <div className="relative min-h-screen bg-white">
            {/* Верхняя панель */}
            <div className="absolute top-4 left-4 z-10">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-105 transition"
                >
                    <ArrowLeft size={20} />
                </button>
            </div>

            {/* Фото */}
            <div className="h-64 w-full overflow-hidden rounded-b-3xl shadow-sm">
                <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Контент */}
            <div className="p-5">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{dish.title}</h1>

                {dish.description && (
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {dish.description}
                    </p>
                )}

                <div className="text-lg font-semibold text-brandBlue mb-6">
                    {dish.price} ₽
                </div>

                <PrimaryButton
                    onClick={handleAddToCart}
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